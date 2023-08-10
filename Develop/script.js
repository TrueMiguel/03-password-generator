// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here

// creating the array for the password elements
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
// creating a blank var for the added arrays to concatnate to
var pwArray = []

// a blank variable for how many minumum unique criteria
var minReq = 0

// a blank variable for which password criteria need to be there
var minCheck = []

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
  
  // Make sure that it is a integer and not a string 
  if (!passwordLenghtInt) {
    window.alert("Please enter a numerical value.")
    generatePassword();
  }
  // running pwIndex here to stop program if prompt isn't 8-128.
  pwIndex = pwInt();
  var typeLower = confirm("Do you want lower case characters?");
  var typeUpper = confirm("Do you want upper case characters?");
  var typeNum = confirm("Do you want numeric characters?");
  var typeSpecial = confirm ("Do you want special characters?");

  // checks to see at least one criteria is selected.
  if (
    !typeLower && !typeUpper && !typeNum && !typeSpecial
  ) {
    window.alert("Please select at least one criteria for your password.")
    generatePassword()
  }

  // function to add to the pwArray only the password criteria that is needed. 
 var pwParam = function () {
  if (typeLower === true) {
    pwArray = pwArray.concat(lettersLower);
    minReq++;
    minCheck.push("ll");
    // arrayMinCheck.chosenArray.push(lettersLower);
  }  
  
  if (typeUpper === true) {
    pwArray = pwArray.concat(lettersUpper);
    minReq++;
    minCheck.push("lu");
  }

  if (typeNum === true) {
    pwArray = pwArray.concat(num);
    minReq++;
    minCheck.push("nu");
  }

  if (typeSpecial === true) {
    pwArray = pwArray.concat(specialChar);
    minReq++;
    minCheck.push("sc");
  }

  }

  pwParam();

  // for loop to iterate randomly throught the password array
  for (;fullPassword.length != pwIndex;) {
    var i = (Math.floor(Math.random() * pwArray.length))
    fullPassword = fullPassword.concat(pwArray[i])
  }

  // removing characters from the password so that when I go to the below if statement it isn't over the desired limit
  fullPassword.splice(0,minReq)


  // checking if the criteria is selected. If so then adds atleast one element from that array randomly in a random position
  if (minCheck.includes("ll")) {
    var i = (Math.floor(Math.random() * fullPassword.length)); 
    fullPassword.splice(i, 0, rlgLower);
  } 

  if (minCheck.includes("lu")) {
    var i = (Math.floor(Math.random() * fullPassword.length));
    fullPassword.splice(i, 0, rlgUpper);
  }

  if (minCheck.includes("nu")) {
    var i = (Math.floor(Math.random() * fullPassword.length));
    fullPassword.splice(i, 0, rng);
  } 

  if (minCheck.includes("sc")) {
    var i = (Math.floor(Math.random() * fullPassword.length));
    fullPassword.splice(i, 0, rsg);
  }
  
  // fullPassword.join("") to combine password array into string
  return fullPassword.join("")
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// need to make button work and when pressed it will generate a password



// writePassword()  

