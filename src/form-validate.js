var myInput = document.getElementById("psw");
var emailInput = document.getElementById("_email");
var rPsw = document.getElementById("rpsw");

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  var matchLCL = myInput.value.match(lowerCaseLetters);
  if (matchLCL) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  var matchUCL = myInput.value.match(upperCaseLetters);
  if (matchUCL) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  var matchNumber = myInput.value.match(numbers);
  if (matchNumber) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  var matchLength = myInput.value.length >= 8;
  if (matchLength) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  if ((matchLCL) && (matchUCL) && (matchNumber) && (matchLength)) {
      myInput.style.border = "1px solid green";
    } else {
      myInput.style.border = "1px solid red";
    }
  
}

emailInput.onkeyup = function() {
  var emailRegExp = /[\D\d]+@[a-z]+\.[a-z]+/g;
  if (emailInput.value.match(emailRegExp)) {  
      emailInput.style.border = "1px solid green";
    } else {
      emailInput.style.border = "1px solid red";
    }
}

rPsw.oninput = function() {
  passwordCheck();
} 

myInput.oninput = function() {
  passwordCheck();
} 

function passwordCheck() {
  var psw = document.getElementById("psw");
  if (rpsw.value == psw.value) {  
    rPsw.style.border = "1px solid green";
  } else {
    rPsw.style.border = "1px solid red";
  }
}