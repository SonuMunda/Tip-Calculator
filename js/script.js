// Initial variable values
var billAmountVal = 0.0;
var tipPercentageVal = 0;
var noOfPeopleVal = 0;
var calculatedTipVal = 0.0;
var totalAmountVal = 0.0;

// Input fields
var billAmountInput = document.getElementById("billAmount");
var tipPercentageInput = document.getElementById("percentage");
var numberOfPeopleInput = document.getElementById("people");

// Output fields
var calculatedTipField = document.getElementById("calculated-tip");
var totalAmountField = document.getElementById("total-calculated-amount");

// Set initial values to input and output fields
billAmountInput.value = billAmountVal.toFixed(2);
tipPercentageInput.value = tipPercentageVal;
numberOfPeopleInput.value = noOfPeopleVal;
calculatedTipField.innerHTML = calculatedTipVal.toFixed(2);
totalAmountField.innerHTML = totalAmountVal.toFixed(2);

// Calculate function triggered by the button click
const calculate = () => {
  // Retrieve values from input fields
  var billAmount = parseFloat(billAmountInput.value);
  var tipPercentage = parseFloat(tipPercentageInput.value);
  var numberOfPeople = parseFloat(numberOfPeopleInput.value);

  // Calculate tip amount
  var tipAmount = (billAmount * tipPercentage) / 100;
  calculatedTipVal = tipAmount / numberOfPeople;
  calculatedTipField.innerHTML = calculatedTipVal.toFixed(2);

  // Calculate total amount
  var totalAmount = billAmount / numberOfPeople + calculatedTipVal;
  totalAmountField.innerHTML = totalAmount.toFixed(2);
};
