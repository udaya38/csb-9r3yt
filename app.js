let btn_timer = document.querySelector(".timer-btn");
let time_text = document.querySelector(".time-text");

btn_timer.addEventListener("click", () => {
  if (btn_timer.checked) {
    document.querySelector(".timer-popup").style.display = "block";
  } else {
    document.querySelector(".timer-popup").style.display = "none";
  }
  // console.log(btn_timer.checked);
});
//Submit quiz
function setQuiz() {
  let namecur = document.getElementById("nameCurr").value;
  let option1 = document.getElementById("option1").checked;
  let option2 = document.getElementById("option2").checked;

  if (
    namecur === "" ||
    namecur === null ||
    (option1 === false && option2 === false)
  ) {
    document.querySelector(".alert").style.display = "block";
    return;
  }
}
//Timer
function setTime() {
  let hours = document.getElementById("hours").value;
  let minutes = document.getElementById("minutes").value;
  let seconds = document.getElementById("seconds").value;
  time_text.innerHTML =
    "Timer(" + hours + "h-" + minutes + "m-" + seconds + "s)";
  document.querySelector(".timer-popup").style.display = "none";
}

function loaddropdown() {
  var dropdown = document.getElementById("minutes");
  var dropdown1 = document.getElementById("seconds");

  for (var i = 0; i < 60; i++) {
    var newOption = document.createElement("option");
    var newOption1 = document.createElement("option");
    newOption1.text = i;
    newOption1.value = i;
    newOption.text = i;
    newOption.value = i;
    if (i < 10) {
      newOption.text = "0" + i;
      newOption.value = "0" + i;
      newOption1.text = "0" + i;
      newOption1.value = "0" + i;
    }
    dropdown.appendChild(newOption);
    dropdown1.appendChild(newOption1);
  }
}
window.onload = loaddropdown();
