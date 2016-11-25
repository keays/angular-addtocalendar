'use strict';

var forEachAttr = require('./lib/forEachAttr'),
  formatTime = require('./lib/formatTime'),
  getGoogleCalendarUrl = require('./lib/calendars/getGoogleCalendarUrl'),
  getIcsBlob = require('./lib/getIcsBlob'),
  getIcsCalendar = require('./lib/calendars/getIcsCalendar'),
  getIcsFileName = require('./lib/getIcsFileName'),
  getMicrosoftCalendarUrl = require('./lib/calendars/getMicrosoftCalendarUrl'),
  getYahooCalendarUrl = require('./lib/calendars/getYahooCalendarUrl');

module.exports = ['$scope', '$attrs', 'FileSaver',
  function ($scope, $attrs, FileSaver) {

    var dates = {};

    $scope.description = $scope.description || '';

    function setTimesFromFormat() {
      var format = $scope.format;
      var timezone = $scope.timezone;

      ['startDate', 'endDate']
        .forEach(function(t) {
          dates[t] = formatTime($scope[t], format, timezone);
        });
    }

    function getSanitizedData() {
      var urlData = {};
      forEachAttr($scope, function(key) {
        urlData[key] = encodeURIComponent($scope[key]);
      });
      return urlData;
    }

    function buildUrl() {
      var urlData = angular.extend(getSanitizedData(), dates),
          icsData = angular.extend({}, $scope, dates);

      $scope.calendarUrl = {
        microsoft: getMicrosoftCalendarUrl(urlData),
        google: getGoogleCalendarUrl(urlData),
        yahoo: getYahooCalendarUrl(urlData),
        icalendar: getIcsCalendar(icsData),
        dlIcal: dlIcal
      };
    }

    function dlIcal() {
      var fileName = getIcsFileName($scope.title);
      var icsData = $scope.calendarUrl.icalendar;
      var icsBlob = getIcsBlob(icsData);
      FileSaver.saveAs(icsBlob, fileName);
    }

    function init() {
      setTimesFromFormat();
      buildUrl();
    }

    forEachAttr($attrs, function(key) {
      $attrs.$observe(key, init);
    });
    init();
  }
];
