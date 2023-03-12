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

      var length = prompt('How many characters would you like it to be? ( mininum of 8 characters )');  
        if (length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        } else if (length > 128) {
            alert('Password cannot be longer than 128 characters.');
            return;
        }
     /* var length = prompt('How many characters would you like it to be? ( mininum of 8 characters )');  */
      var upperConfirm = confirm("Would you like uppercases included? (OK = yes, Cancel = no)");
      var lowerConfirm = confirm("Would you like lowercases included? (OK = yes, Cancel = no)");
      var numericConfirm = confirm("Would you like numbers included? (OK = yes, Cancel = no)");
      var specialConfirm = confirm("Would you like special characters included? (OK = yes, Cancel = no)");
      var charset = "";
      var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowerCharset = 'abcdefghijklmnopqrstuvwxyz';
      var numericCharset = '0123456789';
      var specialCharset = '!@#$%^&*-+<>/?`~='; 
      var retVal = "";
// Most unnecessary coding World Record holder
      if (upperConfirm === true && lowerConfirm === true && numericConfirm === true && specialConfirm === true) {
            charset = upperCharset + lowerCharset + numericCharset + specialCharset;
        } else if (upperConfirm === true && lowerConfirm === true && numericConfirm === true) {
            charset = upperCharset + lowerCharset + numericCharset;
        } else if (upperConfirm === true && lowerConfirm === true && specialConfirm === true) {
            charset = upperCharset + lowerCharset + specialCharset;
        } else if (upperConfirm === true && numericConfirm === true && specialConfirm === true) {
            charset = upperCharset + numericCharset + specialCharset;
        } else if (lowerConfirm === true && numericConfirm === true && specialConfirm === true) {
            charset = lowerCharset + numericCharset + specialCharset;
        } else if (upperConfirm === true && lowerConfirm === true) {
            charset = upperCharset + lowerCharset;
        } else if (upperConfirm === true && numericConfirm === true) {
            charset = upperCharset + numericCharset;
        } else if (upperConfirm === true && specialConfirm === true) {
            charset = upperCharset + specialCharset;
        } else if (lowerConfirm === true && numericConfirm === true) {
            charset = lowerCharset + numericCharset;
        } else if (lowerConfirm === true && specialConfirm === true) {
            charset = lowerCharset + specialCharset;
        } else if (numericConfirm === true && specialConfirm === true) {
            charset = numericCharset + specialCharset;
        } else if (upperConfirm === true) {
            charset = upperCharset;
        } else if (lowerConfirm === true) {
            charset = lowerCharset;
        } else if (numericConfirm === true) {
            charset = numericCharset;
        } else if (specialConfirm === true) {
            charset = specialCharset;
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

