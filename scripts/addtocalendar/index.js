import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import ngFileSaver from 'angular-file-saver';
import config from './config';
import controller from './controller';
import directive from './directive';
import './styles.scss';

angular
  .module('jshor.angular-addtocalendar', [
    'ngFileSaver',
    'ui.bootstrap'
  ])
  .config(config)
  .controller('AddtocalendarCtrl', controller)
  .directive('addtocalendar', directive);