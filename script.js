// 1. Grab elements from the HTML page
const billInput = document.getElementById("bill-input");
const tipSelect = document.getElementById("tip-select");
const peopleInput = document.getElementById("people-input");
const calculateBtn = document.getElementById("calculate-btn");
const errorMsg = document.getElementById("error-msg");
const tipPerPersonText = document.getElementById("tip-per-person");
const totalPerPersonText = document.getElementById("total-per-person");
// 2. Run this code when the button is clicked
calculateBtn.addEventListener("click", function () {
  
  // 3. Get the numbers typed by the user
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipSelect.value);
  const people = parseFloat(peopleInput.value);
    // 4. Check if the inputs are invalid
  if (isNaN(bill) || bill <= 0 || isNaN(people) || people < 1) {
    errorMsg.classList.remove("d-none"); // Show the red Bootstrap alert
    return; // Stop running the rest of the code
  }

  // If numbers are good, make sure the red error alert stays hidden
  errorMsg.classList.add("d-none");
    // 5. Calculate the tip and total per person
  const totalTip = bill * tipPercent;
  const tipPerPerson = totalTip / people;
  const totalPerPerson = (bill + totalTip) / people;

  // 6. Display the results on the page (rounded to 2 decimal places)
  tipPerPersonText.textContent = tipPerPerson.toFixed(2);
  totalPerPersonText.textContent = totalPerPerson.toFixed(2);


});
