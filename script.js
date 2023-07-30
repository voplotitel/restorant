const button = document.getElementById("btn");
button.addEventListener("click", calculateAmaunt);

const addTip = document.querySelector("#addTip");

addTip.addEventListener("click", (e) => {
  e.preventDefault();
  tip.style.display = "block";
})

function calculateAmaunt(e) {
  e.preventDefault();
  const bill = document.querySelector("#bill").value;
  const people = document.querySelector("#people").value;
  const tip = document.querySelector("#tip").value;


  if (bill === "" || people === "" || people < 1) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Please enter your information!',
    })
  }

  let amountPerson = bill / people;
  let tipPerson = (bill * tip) / people;
  let totalSum = amountPerson + tipPerson;

  amountPerson = amountPerson.toFixed(2);
  tipPerson = tipPerson.toFixed(2);
  totalSum = totalSum.toFixed(2);

  document.querySelector("#dividedBill").textContent = amountPerson;
  document.querySelector("#dividedTip").textContent = tipPerson;
  document.querySelector("#billAndTip").textContent = totalSum;
}
