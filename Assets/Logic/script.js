// Assigned variable and event listener to generate button
// Declared variable passwordLength in global because it's used in multiple functions.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
let passwordLength = document.getElementById("PasswordLength");

// Concat arrays is the user faced function. This is assigning variables to the four character groups 
// and created the arrays required for each group as well as linking their associated checkbox's to the document 
// taking the users selected parameters and creating an array based off of it.

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
    return; // Created alert to remind user to select at least one character type to generate password
  }  if (passwordLength.valueAsNumber < 8 || passwordLength.valueAsNumber > 128) { 
    alert("Please enter a password length between 8 and 128");
    return; // Created alert to remind user that the password length needs to be between 8 and 128
  }  if (passwordLength.value === "") { 
    alert("Please enter a password length");
    return; // Created alert to remind user if the password length field was left empty before attempting to generate password 
  } if (lwBox.checked === true) {
    selectedArrays = selectedArrays.concat(lowerCase);
  } if (upBox.checked === true) {
    selectedArrays = selectedArrays.concat(upperCase);
  } if (nmBox.checked === true) {
    selectedArrays = selectedArrays.concat(numBers);
  } if (spBox.checked === true) {
    selectedArrays = selectedArrays.concat(specialChar);
  }
  return selectedArrays; // Created a "checklist" pun intended, of if statements checking the boolean state of the check boxes so that the application knows which arrays the user has selected
}

// Password generation function, taking the array created by the user, assigning a number to each string in the array
// and then selecting a random number from the string until the password length set by the user has been reached. Then
// it converts the random numbers back into the characters from the array from which they were assigned.
function generatePassword(selectedArrays) {
  
  randomArray = [];
  for (let i = 0; i < passwordLength.valueAsNumber; i++) {
    let randomNumber = Math.floor(Math.random() * selectedArrays.length);
    randomArray = randomArray.concat(selectedArrays[randomNumber]);
  }
  return randomArray.join('');
}
// Primary function that calls the concatArrays function and prints the return from the generatePassword into the text area.
function writePassword() {

  var password = generatePassword(concatArrays());
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

