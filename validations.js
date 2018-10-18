/***********************************************************************/
/*Function validateDateFormat:
Validate date format input "DD MM YYYY".
Parameters:
  -p_date => "DD MM YYYY".
Output:
  -No errors => returns null.
  -Errors    => returns error message.
Constraints:
  1.Validate format input "DD MM YYYY".
  2.The application can limit calculation on an input range of dates from 1900 to 2010.
*/
/***********************************************************************/
function validateDateFormat(p_date) {

  //Variable to store returned value from function
  let resp;

  //1. Length must be 10 positions.
  if (p_date.length != 10) {
    resp = "Date must be 10 characters long.";
    return resp;
  }

  //2. Position 3 and 6 must be an space.
  if (p_date.substr(2, 1) != " ") {
    resp = "The 3rd character of the date must be a space.";
    return resp;
  }

  //3. Position 6 must be an space.
  if (p_date.substr(5, 1) != " ") {
    resp = "The 6th character must be a space.";
    return resp;
  }

  //4. Characters must be numbers 0-9.
  for (let i = 0; i < p_date.length; i++) {
    if (i == 2 || i == 5) {
      continue;
    }
    if (!(p_date[i].charCodeAt(0) >= 48 && p_date[i].charCodeAt(0) <= 57)) {
      resp = "All characters must be numbers between 0-9.";
      return resp;
    }
  }

  //Limit YYYY input range from 1900 to 2010.
  //5. Positions 7 to 10 greater than 1900 and less than 2010.
  if (!(parseInt(p_date.year) >= 1900 && parseInt(p_date.year) <= 2010)) {
    resp = "The YYYY must be between 1900 and 2010.";
    return resp;
  }

  //6. Positions 4 to 5 between 1 and 12.
  if (!(parseInt(p_date.month) >= 1 && parseInt(p_date.month) <= 12)) {
    resp = "The MM must be between 01 and 12.";
    return resp;
  }

  //7. Positions 1 to 2 greater than or equal to 1 and less then or equal than 31.
  //Calculate the number of days for the given month
  let numDays = daysInMonth(p_date.year, p_date.month);
  if (!(parseInt(p_date.day) >= 1 && parseInt(p_date.day) <= numDays)) {
    resp = "The DD for the given month, must be between 1 and " + numDays + ".";
    return resp;
  }

  //Reached this line there are no format Errors
  return null;

}

/***********************************************************************/
/*Function isLeapYear:
Checks if the year is a leap year (29 days in February).
Parameters:
  -p_year => "YYYY".
Output:
  -It's a leap year => returns true.
  -It's not a leap year => returns false.
Constraints: None
*/
/***********************************************************************/
function isLeapYear(p_year) {

  let resp;

  resp = (parseInt(p_year) % 100 === 0) ? (parseInt(p_year) % 400 === 0) : (parseInt(p_year) % 4 === 0);

  return resp;
}

/***********************************************************************/
/*Function daysInMonth:
Returns the number of days in a given month.
Parameters:
  -p_year => "YYYY".
  -p_month => "MM".
Output:
  -return number of days.
Constraints: None
*/
/***********************************************************************/
function daysInMonth(p_year, p_month) {

  let resp;
  let year = parseInt(p_year);
  let month = parseInt(p_month);

  //Assign the days depending on the month
  if (month == 1) {
    resp = 31;
  } else if (month == 2) {
    //Check if is leap year for February
    resp = (isLeapYear(year)) ? 29 : 28;
  } else if (month == 3) {
    resp = 31;
  } else if (month == 4) {
    resp = 30;
  } else if (month == 5) {
    resp = 31;
  } else if (month == 6) {
    resp = 31;
  } else if (month == 7) {
    resp = 30;
  } else if (month == 8) {
    resp = 31;
  } else if (month == 9) {
    resp = 30;
  } else if (month == 10) {
    resp = 31;
  } else if (month == 11) {
    resp = 30;
  } else if (month == 12) {
    resp = 31;
  }

  return resp;
}
