import moment from 'moment';

export default (gmtString: string) => {
  // extract the number after 'GMT+' or 'GMT-'
  const gmtOffset = parseInt(gmtString.slice(4), 10);

  const date = new Date();

  // get the number of milliseconds since January 1, 1970 00:00:00 UTC
  const timeInUTC = date.getTime();

  // calculate the time in the desired time zone
  const timeInCustomTimeZone = timeInUTC + (gmtOffset * 60000);

  const customTimeZoneDate = new Date(timeInCustomTimeZone);

  return customTimeZoneDate.toLocaleTimeString();
};

export const getCurrentTimeInTimeZone = (gmtString: string) => {
  // extract the number after 'GMT+' or 'GMT-'
  const gmtOffset = parseInt(gmtString.slice(4), 10);

  // convert the UTC time to the desired time zone
  // const timeInCustomTimeZone = utcTime.tz(`Etc/GMT${gmtOffset > 0 ? '+' : ''}${gmtOffset}`);
  const timeInCustomTimeZone = moment.utc().utcOffset(gmtOffset);

  // return the time in the desired time zone as a string
  return timeInCustomTimeZone;
};
