// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {

  var password = "";

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = "!@#$%^&*()";
  var charList = ["0123456789", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "!@#$%^&*()"];


  var length = prompt("Please enter the passwords length between 8 and 128?");
  if (length === NaN) {
    alert(length + " is not a number. Please enter a number");
  } else if (length < 8 || length > 128) {
    alert("That length is out of bounds.");
  } else {
    var passwordChar = "";
    var areLowercase = confirm("Include lowercase characters in the password?");
    if(areLowercase){
      passwordChar += lowercase
    }
    var areUppercase = confirm("Include uppercase characters in the password?");
    if(areUppercase){
      passwordChar+=uppercase;
    }
    var areNumeric = confirm("Include numeric characters in the password?");
    if(areNumeric){
      passwordChar += numbers;
    }
    var areSpecialChar = confirm("Include special characters in the password?");
    if(areSpecialChar){
      passwordChar+=specialChar;
    }
    if (areLowercase == false && areUppercase == false && areNumeric == false && areSpecialChar == false) {
      alert("Please select at least one option.");
    }else {
      for(var i = 0; i<length;i++){
        var randomNumber = Math.floor(Math.random() * passwordChar.length);
        password += passwordChar.substring(randomNumber, randomNumber+1);

      }


    }


  }


  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


