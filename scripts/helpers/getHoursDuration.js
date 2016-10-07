import moment from 'moment';

const getMilitaryHours = hours => {
  if(hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}00`;
}

const getHoursDuration = (startDate, endDate, timezone) => {
  let start = new moment(startDate);
  let end = new moment(endDate);

  if(timezone) {
    start.utcOffset(timezone);
    end.utcOffset(timezone);
  }

  let hours = moment
    .duration(end.diff(start))
    .asHours();

  return getMilitaryHours(hours);
}

export default getHoursDuration;