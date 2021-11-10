// Assignment Code
var generateBtn = document.querySelector("#generate");

let selectedArrays
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let lowerCase =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numBers = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`]
let specialChar = [`"`,` `,`!`,`"`,`#`,`$`,`%`,`&`,`'`,`(`,`)`,`*`,`+`,`,`,`-`,`.`,`:`,`;`,`<`,`=`,`>`,`?`,`@`,`[`,`]`,`^`,`_`,`{`,`|`,`}`,`~`]

function generatePassword(params) {
  
}
let randomNumber = Math.floor(Math.random()*computerChoices.length)
console.log(randomNumber)

for (let i = 0; index < array.length; index++) {
  password = array[i];
  
}

if (selectedArrays === ) {
  
}


let lowerAlpha = [];
let upperAlpha = [];
let numBer = [];
let specChar = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function myFunction() {
  // Get the checkbox
let upBox = document.getElementById("Uppercase");
let lwBox = document.getElementById("Lowercase");
let nmBox = document.getElementById("Numbers");
let spBox = document.getElementById("Specialchars");

if (upBox.checked === true){
    upperAlpha = true;
    if (lwBox.checked === true)
    lowerAlpha = true;
    if (nmBox.checked === true)
    numBer = true;
    if (spBox.checked === true)
    SpecChar = true; 
  }

  
}  
  {
    text.style.display = "none";
  }
}
