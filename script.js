// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

////// My Code //////
// Arrays for the password

var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetArrayUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numberArray = [0,1,2,3,4,5,6,7,8,9]
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "/", "<", ">", "?", "~", "`", '"'];


// Prompts for password options

  function promptPassword() {
    // prompt for password length
    var passwordLength = parseInt(prompt("How many characters do you want your password to be? (8-128 characters)"));
    console.log("password length: ", passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid number between 8 and 128.");
      return promptPassword();
    } else if (Number.isNaN(passwordLength)) {
      alert("Password length must be a valid number between 8 and 128.");
      return promptPassword();
    } 

    // confirms for password character types
    var passwordLower = confirm("Do you want lowercase letters?");
    var passwordUpper = confirm("Do you want uppercase letters?");
    var passwordNumber = confirm("Do you want numbers?");
    var passwordSpecial = confirm("Do you want special characters?");
    var passwordObject = {
      length: passwordLength,
      lowercase: passwordLower,
      uppercase: passwordUpper,
      number: passwordNumber,
      specialCharacters: passwordSpecial
    }
    console.log("password object: ", passwordObject);

    return passwordObject;
  }

  function generatePassword() {
    var passwordOptions = promptPassword();
    var generatedPassword = [];
    // stores possible types of characters to be used 
    var possible = [];

    // stores at least one of each chosen character type to ensure it is used
    var guaranteed = [];

    // adds lowercase letters to possible array
    if (passwordOptions.lowercase) {
      possible = possible.concat(alphabetArray);
      guaranteed.push(alphabetArray[Math.floor(Math.random() * alphabetArray.length)]);
    }

    // adds uppercase letters to possible array
    if (passwordOptions.uppercase) {
      possible = possible.concat(alphabetArrayUpper);
      guaranteed.push(alphabetArrayUpper[Math.floor(Math.random() * alphabetArrayUpper.length)]);
    }

    // adds numbers to possible array
    if (passwordOptions.number) {
      possible = possible.concat(numberArray);
      guaranteed.push(numberArray[Math.floor(Math.random() * numberArray.length)]);
    }

    // adds special characters to possible array
    if (passwordOptions.specialCharacters) {
      possible = possible.concat(specialArray);
      guaranteed.push(specialArray[Math.floor(Math.random() * specialArray.length)]);
    }

    // loops through possible characters array and adds random characters to generated password
    for (let i = 0; i < passwordOptions.length; i++) {
      var random = Math.floor(Math.random() * possible.length);
      generatedPassword.push(possible[random]);
    }

    // loops through guaranteed characters array and replaces random characters in password
    for (let i = 0; i < guaranteed.length; i++) {
      generatedPassword[i] = guaranteed[i];
    }

    return generatedPassword.join("");
  }
  