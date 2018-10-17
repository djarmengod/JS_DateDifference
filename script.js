/***********************************************************************/
/*Function dateDifference:
Calculates the difference between two dates in "DD MM YYYY" in number of days.
Parameters:
  -p_date1 => "DD MM YYYY".
  -p_date2 => "DD MM YYYY".
Output:
  "DD MM YYYY", "DD MM YYYY", difference
Constraints:
  1.The application may not make use of the platform / SDK libraries for date manipulation.
  2.The application can limit calculation on an input range of dates from 1900 to 2010.
*/
/***********************************************************************/
function dateDifference (p_date1,p_date2) {

//Variable to store returned value from function
let resp;

//Create String Objects for input dates to assign day,month,year properties
let date1 = new String(p_date1);
date1.day = date1.substr(0, 2);
date1.month = date1.substr(3, 2);
date1.year = date1.substr(6, 4);

let date2 = new String(p_date2);
date2.day = date1.substr(0, 2);
date2.month = date1.substr(3, 2);
date2.year = date1.substr(6, 4);


  //Check input format "DD MM YYYY" for p_date1
  resp = validateDateFormat(date1);
  if (resp !== null) {
    console.log(resp);
    return;
  }

  //Check input format "DD MM YYYY" for p_date2
  resp = validateDateFormat(date2);
  if (resp !== null) {
    console.log(resp);
    return;
  }

  //Valid input format then calculate days



}

dateDifference ("01 01 2010","20 01 2018");
