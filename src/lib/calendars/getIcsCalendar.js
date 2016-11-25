'use strict';

var formatIcsText = require('../formatIcsText');

/**
 * Returns file contents for a .ics file.
 * @return {String}  ics calendar data
 */
module.exports = function (data) {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    'CLASS:PUBLIC',
    'DESCRIPTION:' + formatIcsText(data.description, 62),
    'DTSTART:' + data.startDate,
    'DTEND:' + data.endDate,
    'LOCATION:' + formatIcsText(data.location, 64),
    'SUMMARY:' + formatIcsText(data.title, 66),
    'TRANSP:TRANSPARENT',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\n');
};
