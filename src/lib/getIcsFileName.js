'use strict';

module.exports = function(title) {
  return title.replace(/[^\w ]+/g, '') + '.ics';
};
