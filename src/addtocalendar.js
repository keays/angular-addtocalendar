/**
 * angular-addtocalendar
 * An AngularJS directive for adding an event to calendar apps.
 *
 * module
 */
'use strict';

require('angular-file-saver');

angular
  .module('jshor.angular-addtocalendar', ['ngFileSaver'])
  .config(require('./config'))
  .directive('addtocalendar', require('./directive'))
  .controller('AddtocalendarCtrl', require('./controller'));
