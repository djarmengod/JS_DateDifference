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
  if (p_date.length != 10 ) {
    resp = "Date must be 10 characters long.";
    return resp;
  }

  //2. Position 3 and 6 must be an space.
  if (p_date.substr(2, 1) != " " ) {
    console.log("The 3rd character of the date must be a space.");
    return false;
  }

  //3. Position 6 must be an space.
  if (p_date.substr(5, 1) != " " ) {
    console.log("The 6th character must be a space.");
    return false;
  }

  //4. Characters must be numbers 0-9.
  for (let i = 0 ; i < p_date.length; i++) {
    if (i == 2 || i == 5) {
      continue;
    }
    if (!(p_date[i].charCodeAt(0) >= 48 && p_date[i].charCodeAt(0) <= 57)){
      console.log("All characters must be numbers between 0-9.");
      return false;
    }
  }

  //5. Positions 1 to 2 greater than or equal to 1 and less then or equal than 31.
  if ( !(parseInt(p_date.day) >= 1 && parseInt(p_date.day) <= 31) ) {
    console.log("The DD must be greater or equal to 1 and less or equal to 31.");
    return false;
  }

  //6. Positions 4 to 5 greater than or equal to 0 and less then or equal than 12.
  if ( !(parseInt(p_date.month) >= 1 && parseInt(p_date.month) <= 12) ) {
    console.log("The MM must be greater or equal to 1 and less or equal to 31.");
    return false;
  }

  //Limit YYYY input range from 1900 to 2010.
  //7. Positions 7 to 10 greater than 1900 and less than 2010.
  if ( !(parseInt(p_date.year) >= 1900 && parseInt(p_date.year) <= 2010) ) {
    console.log("The YYYY must be greater or equal to 1900 and less or equal to 2010.");
    return false;
  }

}
