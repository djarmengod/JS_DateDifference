/***********************************************************************/
/*Function dateDifference:
Calculates the difference between two dates in "DD MM YYYY" in number of days.
Parameters:
  -p_dates => "DD MM YYYY, DD MM YYYY".
Output:
  "DD MM YYYY", "DD MM YYYY", difference
Constraints:
  1.The application can read in pairs of dates in the following format -  DD MM YYYY, DD MM YYYY
  2.The application can limit calculation on an input range of dates from 1900 to 2010.
  3.First date is the earliest, the second date is the latest and the difference is the number of days
  4.The application may not make use of the platform / SDK libraries for date manipulation.
*/
/***********************************************************************/
function dateDifference(p_dates) {

  //Variable to store returned value from function
  let resp;
  //Variable to store each pair of dates
  let dates = p_dates.substr(0,22);

  //Check input format "DD MM YYYY, DD MM YYYY, " for p_dates
  //1. Length must be 22 positions.
  if (dates.length != 22) {
    resp = "Date input must be 22 characters long and with this format \"DD MM YYYY, DD MM YYYY\".";
    console.log("Dates: " + resp);
    return;
  }

  //Create String Objects for input dates to assign day,month,year properties
  let date1 = new String(dates.substr(0,10));
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  let date2 = new String(dates.substr(12,10));
  date2.day = date2.substr(0, 2);
  date2.month = date2.substr(3, 2);
  date2.year = date2.substr(6, 4);

  //Check input format "DD MM YYYY" for date1
  resp = validateDateFormat(date1);
  if (resp !== null) {
    console.log("date1: " + resp);
    return;
  }

  //Check input format "DD MM YYYY" for date2
  resp = validateDateFormat(date2);
  if (resp !== null) {
    console.log("date2: " + resp);
    return;
  }

  //Check if first date is the earliest and the second is the lattest
  //Reformat the dates to YYYYMMDD
  let date1Reverse = parseInt(date1.year + date1.month + date1.day);
  let date2Reverse = parseInt(date2.year + date2.month + date2.day);
  if (date1Reverse>date2Reverse) {
    console.log("First date must be less than Second date: ");
    return;
  }

  /**********************Calculate days between dates************************/

  //1.Count the days for date1 from the 1st month
  let date1Days = 0;
  let date1Month = parseInt(date1.month);
  for (let i = 1; i < date1Month; i++) {
    date1Days = date1Days + daysInMonth(date1.year, i);
  }

  //2.Add the date1.day to the total days elapsed from the 1st month of date1
  date1Days = date1Days + parseInt(date1.day);

  //3.Count the days for date2 from the 1st month
  let date2Days = 0;
  let date2Month = parseInt(date2.month);
  for (let i = 1; i < date2Month; i++) {
    date2Days = date2Days + daysInMonth(date2.year, i);
  }

  //4.Add the date2.day to the total days elapsed from the 1st month of date1
  date2Days = date2Days + parseInt(date2.day);

  //5.Count the days between years of date1 and date2
  let dateDays=0;
  for (let i = parseInt(date1.year); i < parseInt(date2.year) ; i++) {
      for (let y = 1; y <= 12 ; y++) {
        dateDays = dateDays + daysInMonth(i, y);
      }
  }

  //6.Substract the date1 days to the total days
  dateDays = dateDays - date1Days;

  //7.Add date2 days to the total days
  dateDays = dateDays + date2Days;

  console.log(dateDays);

}

dateDifference("25 03 1910, 24 03 1910");
