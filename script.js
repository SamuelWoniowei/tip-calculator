const amount = document.getElementById("amount");
const tipPerPerson = document.getElementById("tip_per_person");
const numOfPeople = document.getElementById("num_of_people");
const totalPeople = document.getElementById("total_people");
const reset = document.getElementById("reset");
let enteredAmount = 0;
let tipPercent = 0;

//check the amount entered
amount.addEventListener("keyup", function () {
  enteredAmount = this.value;
  if (tipPercent > 0) {
    calculatTip(tipPercent, enteredAmount);
  }
});

//calculate tip based on number of people and percentage
const calculatTip = (percent, enteredAmount) => {
  let tip = ((percent / 100) * enteredAmount).toFixed(2);
  tipPerPerson.innerHTML = "$" + tip;
  totalPeople.innerHTML = "$" + (numOfPeople.value * tip).toFixed(2);
};

//check the percentage clicked on
const checkTip = (percent) => {
  //show active tip selected
  let activeTip = document.getElementById(percent);
  let tips = [5, 10, 15, 25, 50, "custom"];

  for (let i = 0; i < tips.length; i++) {
    if (tips[i] == percent) {
      activeTip.classList.add("tipActive");
    } else {
      document.getElementById(tips[i]).classList.remove("tipActive");
    }
  }

  tipPercent = percent;
  calculatTip(tipPercent, enteredAmount);
};

//update the total tip amount when the number of people is changed
numOfPeople.addEventListener("keyup", function () {
  if (enteredAmount > 0) {
    calculatTip(tipPercent, enteredAmount);
  }
});

//Reset all input and results back to default
reset.addEventListener("click", function () {
  enteredAmount = 0;
  amount.value = 0.0;
  tipPerPerson.innerHTML = "$0.00";
  totalPeople.innerHTML = "$0.00";
  numOfPeople.value = 1;
  tipPercent = 0;
});
