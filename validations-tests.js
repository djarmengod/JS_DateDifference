QUnit.test("dateDifference(p_dates) Test", function(assert) {
  //assert.ok( 1 == "1", "Passed!" );
  /*let input = "10 02 2009, 10 02 2010\n10 02 2009, 10 02 2010";
    assert.equal(input +", "+dateDifference(input).difference, input +", "+null);
*/
  let resp = new Resp();
  resp = dateDifference("");
  let expected = "Date input must have this format \"DD MM YYYY, DD MM YYYY\".";
  let output = resp.error;

  assert.equal(output, expected, "dateDifference(\"\") => " + expected);

  //Extract each line of the date area
  resp = new Resp();
  let input = "08 01 1995, 24 12 2005\n12 09 1945, 15 04 1969";
  expected = "08 01 1995, 24 12 2005, 4003\n12 09 1945, 15 04 1969, 8616\n";
  output = "";
  let lines = input.split("\n");



  for (let i = 0; i < lines.length; i++) {

    //Execute dateDifference function for the given pair of dates
    resp = dateDifference(lines[i]);

    //Format output for different cases
    if (String(lines[i]).length == 0) {
      output = output + resp.error + "\n";
    } else if (resp.error !== null) {
      output = output + lines[i] + ", " + resp.error + "\n";
    } else if (resp.difference !== null) {
      output = output + lines[i] + ", " + resp.difference + "\n";
    } else {
      output = output + "Input not expected. \n";
    }

  }

  assert.equal(output, expected, "Input>  08 01 1995, 24 12 2005" + "\n" +
    "Output>  08 01 1995, 24 12 2005, 4003" + "\n" +
    "Input>  15 04 1969, 12 09 1945" + "\n" +
    "Output> 12 09 1945, 15 04 1969, 8616");


});

QUnit.test("validateDateFormat(p_date) test", function(assert) {

  let date1 = new String("");
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  //assert.ok( 1 == "1", "Passed!" );
  let output = validateDateFormat(date1);
  let expected = "Date must be 10 characters long.";
  assert.equal(output, expected, "validateDateFormat(\"" + date1.valueOf() + "\") => " + expected);

  date1 = new String("10 01 2010A");
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  //assert.ok( 1 == "1", "Passed!" );
  output = validateDateFormat(date1);
  expected = "Date must be 10 characters long.";
  assert.equal(output, expected, "validateDateFormat(\"" + date1.valueOf() + "\") => " + expected);


  date1 = new String("10A01 2010");
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  output = validateDateFormat(date1);
  expected = "The 3rd character of the date must be a space.";
  assert.equal(output, expected, "validateDateFormat(\"" + date1.valueOf() + "\") => " + expected);

  date1 = new String("10 01A2010");
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  output = validateDateFormat(date1);
  expected = "The 6th character must be a space.";
  assert.equal(output, expected, "validateDateFormat(\"" + date1.valueOf() + "\") => " + expected);

  date1 = new String("10 0A 2010");
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  output = validateDateFormat(date1);
  expected = "All characters must be numbers between 0-9.";
  assert.equal(output, expected, "validateDateFormat(\"" + date1.valueOf() + "\") => " + expected);

  date1 = new String("10 01 2011");
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  output = validateDateFormat(date1);
  expected = "The YYYY must be between 1900 and 2010.";
  assert.equal(output, expected, "validateDateFormat(\"" + date1.valueOf() + "\") => " + expected);

  date1 = new String("10 13 2010");
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  output = validateDateFormat(date1);
  expected = "The MM must be between 01 and 12.";
  assert.equal(output, expected, "validateDateFormat(\"" + date1.valueOf() + "\") => " + expected);

  date1 = new String("29 02 2009");
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  output = validateDateFormat(date1);
  let numDays = daysInMonth(date1.year, date1.month);
  expected = "The DD for the given month, must be between 1 and " + numDays + ".";
  assert.equal(output, expected, "validateDateFormat(\"" + date1.valueOf() + "\") => " + expected);

  date1 = new String("29 02 2008");
  date1.day = date1.substr(0, 2);
  date1.month = date1.substr(3, 2);
  date1.year = date1.substr(6, 4);

  output = validateDateFormat(date1);
  expected = null;
  assert.equal(output, expected, "validateDateFormat(\"" + date1.valueOf() + "\") => " + expected);


});

QUnit.test("daysInMonth(p_year,p_month) test", function(assert) {
  //assert.ok( 1 == "1", "Passed!" );
  let output = daysInMonth(2008, 1);
  let expected = 31;
  assert.equal(output, expected, "daysInMonth(2008, 1) => " + expected);

  output = daysInMonth(2008, 2);
  expected = 29;
  assert.equal(output, expected, "daysInMonth(2008, 2) => " + expected);

  output = daysInMonth(2008, 3);
  expected = 31;
  assert.equal(output, expected, "daysInMonth(2008, 3) => " + expected);

  output = daysInMonth(2008, 4);
  expected = 30;
  assert.equal(output, expected, "daysInMonth(2008, 4) => " + expected);

  output = daysInMonth(2008, 5);
  expected = 31;
  assert.equal(output, expected, "daysInMonth(2008, 5) => " + expected);

  output = daysInMonth(2008, 6);
  expected = 31;
  assert.equal(output, expected, "daysInMonth(2008, 6) => " + expected);

  output = daysInMonth(2008, 7);
  expected = 30;
  assert.equal(output, expected, "daysInMonth(2008, 7) => " + expected);

  output = daysInMonth(2008, 8);
  expected = 31;
  assert.equal(output, expected, "daysInMonth(2008, 8) => " + expected);

  output = daysInMonth(2008, 9);
  expected = 30;
  assert.equal(output, expected, "daysInMonth(2008, 9) => " + expected);

  output = daysInMonth(2008, 10);
  expected = 31;
  assert.equal(output, expected, "daysInMonth(2008, 10) => " + expected);

  output = daysInMonth(2008, 11);
  expected = 30;
  assert.equal(output, expected, "daysInMonth(2008, 11) => " + expected);

  output = daysInMonth(2008, 12);
  expected = 31;
  assert.equal(output, expected, "daysInMonth(2008, 12) => " + expected);

});

QUnit.test("isLeapYear(p_year) test", function(assert) {
  //assert.ok( 1 == "1", "Passed!" );
  let output = isLeapYear(2008);
  let expected = true;
  assert.equal(output, expected, "isLeapYear(2008) => " + expected);
  output = daysInMonth(2007);
  expected = undefined;
  assert.equal(output, expected, "isLeapYear(2007) => " + expected);
});
