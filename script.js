//Declaration of HTML elements as constants
const dateWrapper = document.querySelector(".date-wrapper");
const resultWrapper = document.querySelector(".result-wrapper");
const dateArea = document.querySelector("#date-area");
const calculateButton = document.querySelector("#calculate");
const result = document.querySelector(".result");
const errorText = document.querySelector("#error-text p");

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
