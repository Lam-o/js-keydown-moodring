var moodSelector = document.querySelector("#moods");
var body = document.querySelector("body");

//add eventListener moods drop-down
moodSelector.addEventListener("change", function (e) {
  var mood = e.target.value;
  //add if statement
  if (mood === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
    //add else if statement
  } else if (mood === "sad") {
    body.classList.remove("happy");
    body.classList.remove("passionate");
    body.classList.add("sad");
  } else if (mood === "passionate") {
    body.classList.remove("sad");
    body.classList.remove("happy");
    body.classList.add("passionate");
  }
});
//you forgot the , in line 5
