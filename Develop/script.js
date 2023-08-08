// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // creating the prompts for the password requirements
  var passwordLenght = prompt("Please choose lenght fo the password. 8 to 128 characters only")
  alert("Please decide on the following character types that will make up the password")
  var typeLower = confirm("Do you want lower case characters?")
  var typeUpper = confirm("Do you want upper case characters?")
  var typeNum = confirm("Do you want numeric characters?")
  var typeSpecial = confirm ("Do you want special characters?")
  // checking that the prompts work
  console.log(passwordLenght)
  console.log(typeLower)
  console.log(typeUpper)
  console.log(typeNum)
  console.log(typeSpecial)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// need to make button work and when pressed it will generate a password

// multiple window.prompt() for  the password criteria
  // this is password lenght 8-128 characters
  // if to include character types
  // ask wether or not to include lowercase, uppercase, numeric, and or special characters.

writePassword()  