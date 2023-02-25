// Assignment Code
var generateBtn = document.querySelector("#generate");
var userChoice = [];
var finalPassword = [];
var lowerCase1 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase1 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters1 = ["!", "@", "#", "$", "%", "^", "&", "*"];
function generatePassword() {
  let passwordLength = prompt(
    "How many characters do you want your password to have? Must be between 8 and 128"
  );
  if (passwordLength < 8) {
    alert("Please choose a number between 8 and 128");
    return;
  }
  if (passwordLength > 128) {
    alert("Please choose a number between 8 and 128");
    return;
  }
  let lowerCase = confirm("Press OK to include a lowercase letter");
  if (lowerCase === true) {
    userChoice = userChoice.concat(lowerCase1);
  } else {
    return null;
  }
  let upperCase = confirm("Press OK to include an uppercase letter");
  if (upperCase === true) {
    userChoice = userChoice.concat(upperCase1);
  } else {
    return null;
  }
  let numbers = confirm("Press OK to include a number 1-9");
  if (numbers === true) {
    userChoice = userChoice.concat(numbers1);
  } else {
    return null;
  }
  let specialCharacters = confirm("Press OK to include a special character");
  if (specialCharacters === true) {
    userChoice = userChoice.concat(specialCharacters1);
  } else {
    return null;
  }
  console.log("userChoice =" + userChoice);
  if (userChoice.length === 0) {
    return;
  }
  for (i = 0; i <= userChoice; i++) {
    var randomIndex = Math.floor(Math.random() * userChoice);
    var random = userChoice.charAt(randomIndex);
    finalPassword = finalPassword.concat(random);
  }
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
