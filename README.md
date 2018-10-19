# JS_DateDifference
Calculates the difference in days between 2 given dates in "DD MM YYYY" format.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

The application runs on any internet browser compatible with ECMAScript 6.

```
Microsoft Edge, Firefox, Chrome and iOS Safari.
```

### Installing

Use this URL to run the project: https://htmlpreview.github.io/?https://github.com/djarmengod/JS_DateDifference/blob/master/index.html

You can also download a copy of the project files into the same folder by clicking on "Clone or Download" button. If you prefer you can use this URL: https://github.com/djarmengod/JS_DateDifference.git with Git or checkout with SVN.

Click on Clone or download button and press Download ZIP.

```
Once downloaded unzip the files in the same folder and open index.html file with a compatible web browser.
```

## Running the tests

The unit tests have been done by using QUnit JS Unit Testing framework. To run the tests open the file tests.html inside the folder.

Use this URL to run the tests: https://htmlpreview.github.io/?https://github.com/djarmengod/JS_DateDifference/blob/master/tests.html


### JS_DateDifference Unit Tests (validations.js)

The validations.js has been modified to make it unit testable.
There have been created the necessary tests for each function in the file.

```
1. dateDifference(p_dates) Test:
  Tests the input data is correct and checks the input sample data is correct.

2.validateDateFormat(p_date) test
  Tests the input format of the data => "DD MM YYYY, DD MM YYYY".

3.daysInMonth(p_year,p_month) test
  Tests the days in the month for the given year is correct.

4.isLeapYear(p_year) test
  Tests if the year entered is a leap year.
```

## Deployment

Copy all the files into the web server of choice.

## Built With

* [Atom](https://ide.atom.io/) - The web IDE used
* [QUnit](https://qunitjs.com/) - The JavaScript Unit Testing framework used

## Contributing

If you wish to contribute submit a pull request.

## Versioning

For the versions available, see the tags on this repository [tags on this repository](https://github.com/djarmengod/JS_DateDifference/tags).

## Authors

* **David Jaramillo**

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
