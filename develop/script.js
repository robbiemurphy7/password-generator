// CONSTANTS
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '~`! @#$%^&*()_-+={[}]|';


// #generate ELEMENT
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// EventListener
generateBtn.addEventListener('click', writePassword);

    function writePassword() {
        var promptPasswordLength = window.prompt('Your password must be between 8 and 128 characters. Write a number of your choosing below that coincides with the aformentioned integer requirment.');

        //while (promptPasswordLength > 8 && > 128) {
        //    var confirmNum = window.confirm('Please write a number between 8 and 128.');
        //}

        var promptLowerCase = window.confirm('Should your password include lowercase letters?');

        var promptUpperCase = window.confirm('Should your password include uppercase letters?');

        var promptNumeric = window.confirm('Should your password include numbers?');

        var promptSymbols = window.confirm('Should your password include symbols?');
    }

    //function writePassword() {
    //    var promptIntegerLength = window.confirm('Select ')
    // }
