// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let numBers = "1234567890".split("");
let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

let selectedArrays = [];


let upBox = document.getElementById("Uppercase");
let lwBox = document.getElementById("Lowercase");
let nmBox = document.getElementById("Numbers");
let spBox = document.getElementById("Specialchars");
let passwordLength = document.getElementById("PasswordLength");

concatArrays();

function concatArrays() {  
  if (upBox.checked && lwBox.checked && nmBox.checked && spBox.checked === false) {
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

function generatePassword() {
  randomArray = [];
  for (let i = 0; i < passwordLength.valueAsNumber; i++) {
      let randomNumber = Math.floor(Math.random()*selectedArrays.length);
      randomArray = randomArray.concat(selectedArrays[randomNumber]);
  }
  return randomArray.join('');
}

generateBtn.addEventListener("click", writePassword);

// if (selectedArrays === ) {
  // }




// Add event listener to generate button



  // Get the checkbox


// I did this first, even though Thomas said it was making more work.
// if (upBox.checked === true) {
//     upperAlpha = true;
//   if (lwBox.checked === true)
//     lowerAlpha = true;
//   if (nmBox.checked === true)
//     numBer = true;
//   if (spBox.checked === true)
//     specChar = true;
// let lowerAlpha = [];
// let upperAlpha = [];
// let numBer = [];
// let specChar = [];
//     return 
//   }  
// }
