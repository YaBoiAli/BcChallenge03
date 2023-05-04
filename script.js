//Creating password object.
var passwordOptions = {


  //array to hold lowercase letters
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //array to hold uppercase letters
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //array to hold numbers
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //array to hold special characters
  character: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}

//generating password
function generatePassword() {
  var length = 0
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(prompt("Password length (between 8 and 128 characters):"));
  }
  //Asking for user options
    var lowercase = confirm("Include lowercase letters?");
    var uppercase = confirm("Include uppercase letters?");
    var numbers = confirm("Include numbers?");
    var specialChars = confirm("Include special characters?");

  //Intializing the charset for the random password
    var charset = "";
    if (lowercase) {
      charset += passwordOptions.lowerCase;
    }
    if (uppercase) {
      charset += passwordOptions.uppderCase;
    }
    if (numbers) {
      charset += passwordOptions.number;
    }
    if (specialChars) {
      charset += passwordOptions.character;
    }
    //Searches the choices to see if the user atleasr selceted one of the criteria
    if(charset.search(/[a-z]/) == -1 && charset.search(/[A-Z]/) == -1 && charset.search(/[0-9]/) == -1){
      alert("Please select at least one password criteria.");
    }
    while(charset.search(/[a-z]/) == -1 && charset.search(/[A-Z]/) == -1 && charset.search(/[0-9]/) == -1){
      var lowercase = confirm("Include lowercase letters?");
      var uppercase = confirm("Include uppercase letters?");
      var numbers = confirm("Include numbers?");
      var specialChars = confirm("Include special characters?");
    }

  var password = "";
  //Randomizing the password
  for (var i = 0; i < length; i++) {
    var randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
    password += randomChar;
  }

  return password;
}


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