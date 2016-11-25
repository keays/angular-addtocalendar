'use strict';

/**
 * The name of the file will be the event title with alphanumeric chars
 * having the extension `.ics`.
 */
module.exports = function(icsData) {
  return new Blob([icsData], {
    type: 'application/octet-stream'
  });
};
