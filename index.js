for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function()
{
  var name = this.innerHTML;
  check(name);
  buttonAnimation(name);
});
}


function check(name) {
  if (name == 'w') {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (name == 'a') {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (name == 's') {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (name == 'd') {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (name == 'j') {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (name == 'k') {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (name == 'l') {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  else
  {
    alert("Wrong Button Pressed");
  }
}

addEventListener("keypress", function(event) {
  var name = event.key;
  check(name);
  buttonAnimation(name);
})

function buttonAnimation(key)
{
  var activebtn = document.querySelector("." + key);
  activebtn.classList.add("pressed");

  setTimeout(function(){

    activebtn.classList.remove("pressed");
  }, 100);
}

/*
Constructor function
function BellBoy(name, age, hasWorkPermit, languages)
{
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

var bellboy1 = new BellBoy("timmy", 19, true, ["French", "English"]);

Object Methods or functions:

function BellBoy(name, age, hasWorkPermit, languages)
{
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.clean = function(){

    alert("Cleaning In Progress:");
}
}
*/
