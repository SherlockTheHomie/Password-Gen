// Assigned variable and event listener to generate button
// Declared variable passwordLength in global because it's used in multiple functions.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
let passwordLength = document.getElementById("PasswordLength");

// Primary function, declaring variables for the four character groups 
// and created the strings required as well as linking their associated checkbox's to the document.
// 
function concatArrays() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let numBers = "1234567890".split("");
  let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
  let upBox = document.getElementById("Uppercase");
  let lwBox = document.getElementById("Lowercase");
  let nmBox = document.getElementById("Numbers");
  let spBox = document.getElementById("Specialchars");
  let selectedArrays = [];
if ((upBox.checked || lwBox.checked || nmBox.checked || spBox.checked) === false) {
    alert("Please select at least one character type to generate your password");
    return;
  } if (lwBox.checked === true) {
    selectedArrays = selectedArrays.concat(lowerCase);
  } if (upBox.checked === true) {
    selectedArrays = selectedArrays.concat(upperCase);
  } if (nmBox.checked === true) {
    selectedArrays = selectedArrays.concat(numBers);
  } if (spBox.checked === true) {
    selectedArrays = selectedArrays.concat(specialChar);
  }
  return selectedArrays;
}

function generatePassword(selectedArrays) {
  
  randomArray = [];
  for (let i = 0; i < passwordLength.valueAsNumber; i++) {
    let randomNumber = Math.floor(Math.random() * selectedArrays.length);
    randomArray = randomArray.concat(selectedArrays[randomNumber]);
  }
  return randomArray.join('');
}

function writePassword() {

  var password = generatePassword(concatArrays());
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

