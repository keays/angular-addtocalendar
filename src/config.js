'use strict';

module.exports = [
  '$compileProvider',
  function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(http(s)?|data):/);
  }
];
