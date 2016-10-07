/**
 * The name of the file will be the event title with alphanumeric chars
 * having the extension `.ics`.
 */
const getIcsBlob = icsData => {
  return new Blob([icsData], {
    type: 'text/calendar'
  });
}

export default getIcsBlob;