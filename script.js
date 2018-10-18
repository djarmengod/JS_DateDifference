//Declaration of HTML elements as constants
const dateWrapper = document.querySelector(".date-wrapper");
const resultWrapper = document.querySelector(".result-wrapper");
const dateArea = document.querySelector("#date-area");
const calculateButton = document.querySelector("#calculate");
const result = document.querySelector(".result");
const errorText = document.querySelector("#error-text p");

//Create Object prototype to return error and date difference separately.
function Resp() {
  this.error = null;
  this.difference = null;
}

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
  let resp = new Resp;

  //Variable to store each pair of dates
  //let dates = p_dates.substr(0,22);
  let dates = p_dates;

  //Check input format "DD MM YYYY, DD MM YYYY, " for p_dates
  //1. Length must be 22 positions.
  if (dates.length != 22) {
    resp.error = "Date input must have this format \"DD MM YYYY, DD MM YYYY\".";
    return resp;
  }

  //Create String Objects for input dates to assign day,month,year properties
  let date1 = new String(dates.substr(0, 10));
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  let date2 = new String(dates.substr(12, 10));
  date2.day = date2.substr(0, 2);
  date2.month = date2.substr(3, 2);
  date2.year = date2.substr(6, 4);

  //Check input format "DD MM YYYY" for date1
  resp.error = validateDateFormat(date1);
  if (resp.error !== null) {
    resp.error = "Date1: " + resp.error;
    return resp;
  }

  //Check input format "DD MM YYYY" for date2
  resp.error = validateDateFormat(date2);
  if (resp.error !== null) {
    resp.error = "Date2: " + resp.error;
    return resp;
  }

  //Check if first date is the earliest and the second is the lattest
  //Reformat the dates to YYYYMMDD
  let date1Reverse = parseInt(date1.year + date1.month + date1.day);
  let date2Reverse = parseInt(date2.year + date2.month + date2.day);
  if (date1Reverse > date2Reverse) {
    resp.error = "First date must be less than Second date.";
    return resp;
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
  let dateDays = 0;
  for (let i = parseInt(date1.year); i < parseInt(date2.year); i++) {
    for (let y = 1; y <= 12; y++) {
      dateDays = dateDays + daysInMonth(i, y);
    }
  }

  //6.Substract the date1 days to the total days
  dateDays = dateDays - date1Days;

  //7.Add date2 days to the total days
  dateDays = dateDays + date2Days;

  //Return days of difference
  resp.difference = dateDays;
  return resp;

}

// Calculate dates difference
function calculate() {

  //Clear the values on the page
  result.innerHTML = null;
  resultWrapper.innerHTML = null;
  errorText.innerHTML = null;

  //Extract each line of the date area
  let lines = dateArea.value.split("\n");
  let resp = new Resp();
  let output = "";

  for (let i = 0; i < lines.length; i++) {

    //Execute dateDifference function for the given pair of dates
    resp = dateDifference(lines[i]);

    //Format output for different cases
    if (String(lines[i]).length == 0) {
      output = output + resp.error + "<br/>";
    } else if (resp.error !== null) {
      output = output + lines[i] + ", " + resp.error + "<br/>";
    } else if (resp.difference !== null) {
      output = output + lines[i] + ", " + resp.difference + "<br/>";
    } else {
      output = output + "Input not expected. <br/>";
    }

  }

  //Write the output into the resultWrapper.innerHTML
  resultWrapper.innerHTML = output;

  //If only one pair of dates is entered, shows difference days or errors
  if (lines.length == 1) {
    if (resp.error !== null) {
      errorText.innerHTML = resp.error;
    }
    if (resp.difference !== null) {
      result.innerHTML = resp.difference + " days";
    }
  }
}

// Event listeners for keyboard input and the calculate button:
calculateButton.addEventListener("click", calculate, false);
