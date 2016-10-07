import helpers from '../helpers';
import { extend } from 'angular';

class AddtocalendarCtrl {

  constructor($scope, $attrs, FileSaver) {
    this.$scope = $scope;
    this.$attrs = $attrs;
    this.FileSaver = FileSaver;
    this.dates = {};
    this.urlData = {};

    console.log('calendars: ', helpers);
    this.getSanitizedData.call(this);
    this.observeAttrs.call(this);
    this.init.call(this);
  }


  observeAttrs() {
    Object
      .keys(this.$attrs)
      .forEach(key => {
        if(!~key.indexOf('$')) {
          this.$attrs.$observe(key, this.init.bind(this));
        }
      });
  }

  getSanitizedData() {
    let urlData = {};
    Object
      .keys(this.$attrs)
      .forEach(key => {
        if(!~key.indexOf('$')) {
          urlData[key] = encodeURIComponent(this.$scope[key]);
        }
      });
    return urlData;
  }

  setTimesFromFormat() {
    let format = this.$scope.format;
    let timezone = this.$scope.timezone;

    ['startDate', 'endDate']
      .forEach(t => {
        this.dates[t] = helpers
          .formatTime(this.$scope[t], format, timezone);
      });
  }

  buildUrl() {
    let urlData = extend(this.getSanitizedData.call(this), this.dates);

    this.$scope.calendarUrl = {
      microsoft:  helpers.calendars.getMicrosoftCalendarUrl(urlData),
      google:     helpers.calendars.getGoogleCalendarUrl(urlData),
      yahoo:      helpers.calendars.getYahooCalendarUrl(urlData),
      icalendar:  helpers.calendars.getIcsCalendar(this.$scope),
      dlIcal:     this.dlIcal.bind(this)
    };
  }

  dlIcal() {
    let fileName = helpers.getIcsFileName(this.$scope.title);
    let icsData = this.$scope.calendarUrl.icalendar;
    let icsBlob = helpers.getIcsBlob(icsData);

    this.FileSaver.saveAs(icsBlob, fileName);
  }

  init() {
    this.buildUrl.call(this);
    this.setTimesFromFormat.call(this);
  }
}

AddtocalendarCtrl.$inject = ['$scope', '$attrs', 'FileSaver'];

export default AddtocalendarCtrl;