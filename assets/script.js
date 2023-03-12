// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate Password function, length working, 
function wholePassword(){

    function generatePassword() {   
      var upperConfirm = confirm("Would you like uppercases included? (OK = yes, Cancel = no)");
      var lowerConfirm = confirm("Would you like lowercases included? (OK = yes, Cancel = no)");
      var numericConfirm = confirm("Would you like numbers included? (OK = yes, Cancel = no)");
      var specialConfirm = confirm("Would you like special characters included? (OK = yes, Cancel = no)");
      var length = prompt('How many characters would you like it to be? ( mininum of 8 characters )');
      var charset = "";
      var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowerCharset = 'abcdefghijklmnopqrstuvwxyz';
      var numericCharset = '0123456789';
      var specialCharset = '!@#$%^&*-+<>/?`~='; 
      var retVal = "";

      if (upperConfirm === true && lowerConfirm === true && numericConfirm === true) {
            charset = upperCharset + lowerCharset + numericCharset;
        } else if (upperConfirm === true && lowerConfirm === true) {
            charset = upperCharset + lowerCharset;
        } else if (upperConfirm === true && numericConfirm === true) {
            charset = upperCharset + numericCharset;
        } else if (lowerConfirm === true && numericConfirm === true) {
            charset = lowerCharset + numericCharset;
        }else if (upperConfirm === true) {
            charset = upperCharset;
        } else if (lowerConfirm === true) {
            charset = lowerCharset;
        } else if (numericConfirm === true) {
            charset = numericCharset;
        }
      

      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    passwordText.textContent = retVal;
  }
 generatePassword();
 
}

console.log(password);

// Criteria prompts

// Add event listener to generate button
/*generateBtn.addEventListener("click", writePassword);*/

generateBtn.addEventListener("click", wholePassword);

