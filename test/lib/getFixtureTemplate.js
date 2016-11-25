'use strict';

/**
 * angular-addtocalendar
 * An AngularJS directive for adding an event to calendar apps.
 *
 * Returns the angular html for the given addtocalendar fixture.
 */


module.exports = function(fixture, fixtureTag) {
  var el = [fixtureTag];

  for(var key in fixture) {
    if(fixture.hasOwnProperty(key) && key.indexOf('$') === -1) {
      var value = fixture[key];
      if(value && value !== '') {
        key += '="' + value + '"';
      }
      el.push(key);
    }
  }

  return '<' + el.join(' ') + '></' + fixtureTag + '>';
};
