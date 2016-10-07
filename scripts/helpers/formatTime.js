import moment from 'moment';

const formatTime = (timestamp, inputFormat) => {
  let formats = ['YYYYMMDD', 'HHmmss'];

  let date = (() => {
    if(inputFormat) {
      return new moment(timestamp, inputFormat);
    }
    return new moment(timestamp);
  })();

  return formats
    .map(format => date.format(format))
    .join('T');
}

export default formatTime;