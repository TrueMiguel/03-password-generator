// Assignment code here

// creating the array for the password elements
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
// creating a blank var for the added arrays to concatnate to
var pwArray = []

// a blank array checker for the min password criteria
var arrayMinCheck = {}

// random letter generator lower
var lettersLowerIndex = Math.floor(Math.random() * lettersLower.length);
var rlgLower = lettersLower[lettersLowerIndex]

// random letter generator upper
var lettersUpperIndex = Math.floor(Math.random() * lettersUpper.length);
var rlgUpper = lettersUpper[lettersUpperIndex]

// random number generator
var numIndex = Math.floor(Math.random() * num.length);
var rng = num[numIndex]

// random special generator
var specialIndex = Math.floor(Math.random() * specialChar.length);
var rsg = specialChar[specialIndex]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var fullPassword = []

function generatePassword() {

  // variable function to check if prompt number is 8 - 128.
  var pwInt = function() {
    if (passwordLenghtInt < 8) {
        window.alert("Number to small");
        generatePassword();
      } else if (passwordLenghtInt > 128) {
        window.alert("Number to big");
        generatePassword();
      } else { 
       return passwordLenghtInt;
      }
  }

  // Blank variable for pwInt to get assigned to.
  var pwIndex

  // creating the prompts for the password requirements
  window.alert("Please decide on the following character types that will make up the password");
  var passwordLenght = prompt("Please choose a lenght for the password. 8 to 128 characters only");
  // converting lenth to int
  var passwordLenghtInt = parseInt(passwordLenght)
  // running pwIndex here to stop program if prompt isn't 8-128.
  pwIndex = pwInt();
  var typeLower = confirm("Do you want lower case characters?");
  var typeUpper = confirm("Do you want upper case characters?");
  var typeNum = confirm("Do you want numeric characters?");
  var typeSpecial = confirm ("Do you want special characters?");

  // function to add to the pwArray only the password criteria that is needed. 
 var pwParam = function () {
  if (typeLower === true) {
    pwArray = pwArray.concat(lettersLower);
    arrayMinCheck.ll = lettersLower
    // arrayMinCheck.chosenArray.push(lettersLower);
  }  
  
  if (typeUpper === true) {
    pwArray = pwArray.concat(lettersUpper);
    arrayMinCheck.chosenArray.push(lettersUpper);
  }

  if (typeNum === true) {
    pwArray = pwArray.concat(num);
    arrayMinCheck.chosenArray.push(num);

  }

  if (typeSpecial === true) {
    pwArray = pwArray.concat(specialChar)
        arrayMinCheck.chosenArray.push(specialChar);

  }

}

pwParam();

// for loop to iterate randomly throught the password array
for (;fullPassword.length != pwIndex;) {
  var i = (Math.floor(Math.random() * pwArray.length))
  fullPassword = fullPassword.concat(pwArray[i])
}


// loop to check to make sure that the at minum 1 of the selected password criteria is met
if (!pwArray.includes())


// fullPassword.join("") to combine password array into string
  // console.log(fullPassword.join(""))

console.log(arrayMinCheck)

  // passwordLenght will give me the value I need for how big the pw needs to be. 
  // then I need to have the program understand that I need x amount of lower, upper, num, and special. All random. 
  // if / else if loop to check the wanted need of the password. 
  // then have it iterate through the selected criteria
  // have a route where if everything is false then ask if they want to generate the pw if not then end it. 
// && passwordLenghtInt <= 128

  // checking pw lenght
 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 

  
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// need to make button work and when pressed it will generate a password

// multiple window.prompt() for  the password criteria
  // this is password lenght 8-128 characters
  // if to include character types
  // ask wether or not to include lowercase, uppercase, numeric, and or special characters.

writePassword()  

