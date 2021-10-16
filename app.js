let btn_timer = document.querySelector(".timer-btn");
let time_text = document.querySelector(".time-text");
let cancel = document.querySelector(".cancel");

btn_timer.addEventListener("click", () => {
  if (btn_timer.checked) {
    document.querySelector(".timer-popup").style.display = "block";
    document.querySelector(".backdrop").style.display = "block";
  } else {
    document.querySelector(".timer-popup").style.display = "none";
    document.querySelector(".backdrop").style.display = "none";
    time_text.innerHTML = "Timer (optional)";
  }
  // console.log(btn_timer.checked);
});

cancel.addEventListener("click", () => {
  document.querySelector(".timer-popup").style.display = "none";
  document.querySelector(".backdrop").style.display = "none";
  btn_timer.checked = false;
});

//remove Alert
function seeAlert() {
  let namecur = document.getElementById("nameCurr").value;
  let option1 = document.getElementById("option1").checked;
  let option2 = document.getElementById("option2").checked;
  if (
    (namecur !== "" || namecur !== null) &&
    (option1 === true || option2 === true)
  ) {
    document.querySelector(".alert").style.display = "none";
  }
}
//Submit quiz
function setQuiz() {
  document.querySelector(".btn-sound").play();
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

//btn-sound

//Timer
function setTime() {
  let hours = document.getElementById("hours").value;
  let minutes = document.getElementById("minutes").value;
  let seconds = document.getElementById("seconds").value;
  time_text.innerHTML =
    "Timer(" + hours + "h-" + minutes + "m-" + seconds + "s)";
  document.getElementById("hours").value = "00";

  document.getElementById("minutes").value = "00";

  document.getElementById("seconds").value = "00";

  // document.getElementById("minutes").value("00").selected = true;
  document.querySelector(".timer-popup").style.display = "none";
  document.querySelector(".backdrop").style.display = "none";
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
