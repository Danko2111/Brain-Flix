// This function takes in a date arg in milisecond format and returns a
//string that signifies the time it has been since that date.

const dateParser = (date) => {
  const currDate = Date.now();
  const elapsedTime = currDate - date;

  // setting default variables for milliseconds converted to a "time format" for readability of if () chain below
  const minute = 60000;
  const hour = 3600000;
  const day = 86400000;
  const week = 604800000;
  const month = 2592000000;
  const year = 31104000000;

  // creating a if else chain to return the correct timestamp
  // string based on the difference calculated above
  let convertedTime = "";

  if (elapsedTime < minute) {
    convertedTime = "Less than a minute ago";
    return convertedTime;
  } else if (elapsedTime > minute && elapsedTime < hour) {
    convertedTime = `${Math.floor(elapsedTime / minute)} minute(s) ago`;
    return convertedTime;
  } else if (elapsedTime > hour && elapsedTime < day) {
    convertedTime = `${Math.floor(elapsedTime / hour)} hour(s) ago`;
    return convertedTime;
  } else if (elapsedTime > day && elapsedTime < week) {
    convertedTime = `${Math.floor(elapsedTime / day)} day(s) ago`;
    return convertedTime;
  } else if (elapsedTime > week && elapsedTime < month) {
    convertedTime = `${Math.floor(elapsedTime / week)} week(s) ago`;
    return convertedTime;
  } else if (elapsedTime > month && elapsedTime < year) {
    convertedTime = `${Math.floor(elapsedTime / month)} month(s) ago`;
    return convertedTime;
  } else if (elapsedTime > year) {
    convertedTime = `${Math.floor(elapsedTime / year)} year(s) ago`;
    return convertedTime;
  }
};

export { dateParser };
