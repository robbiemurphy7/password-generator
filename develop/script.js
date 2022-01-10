// CONSTANTS
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '~`! @#$%^&*()_-+={[}]|';

// #generate ELEMENT
var generateBtn = document.querySelector('#generate');

// #password ELEMENT
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// EventListener
generateBtn.addEventListener('click', writePassword);

var passwordCharacteristics = '';

function generatePassword() {
    var promptPasswordLength = window.prompt('Your password must be between 8 and 128 characters. Write a number of your choosing below that coincides with the aformentioned integer requirment.');
    // while NECESSITATES CONDITION TO BE TRUE + isNaN - Not-A-Number
    while (isNaN(promptPasswordLength) || promptPasswordLength < 8  || promptPasswordLength > 128) promptPasswordLength = Number(window.prompt('Please write a number between 8 and 128')); {

    }
    var promptLowerCase = window.prompt('Should your password include lowercase letters? Enter "YES" or "NO".');
    if (promptLowerCase === 'no' || promptLowerCase === 'NO') {
        var promptUpperCase;
    }
    var promptUpperCase = window.prompt('Should your password include uppercase letters? Enter "YES" or "NO".');
    if (promptUpperCase === 'no' || promptUpperCase === 'NO') {
        var promptNumeric;
    }
    var promptNumeric = window.prompt('Should your password include numbers? Enter "YES" or "NO".');
    if (promptNumeric === 'no' || promptNumeric === 'NO') {
        var promptSymbols;
    }
    var promptSymbols = window.prompt('Should your password include symbols? Enter "YES" or "NO".');
    if (promptSymbols === 'no' || promptSymbols === 'NO') {

        var confirmSymbols = window.confirm('You must have at least one unique characteristic. Confirm.');
    
    }

    if (promptLowerCase) passwordCharacteristics += lowerCase;

    if (promptUpperCase) passwordCharacteristics += upperCase;

    if (promptNumeric) passwordCharacteristics += numbers;

    if (promptSymbols) passwordCharacteristics += symbols;

    // parseInt() PARSES STRING ARGUMENT AND RETURNS AN INTEGER OF SPECIFIED RADIX
    var password = '';
        for (var i = 0; i < parseInt(promptPasswordLength); i++) {
            var randomIndex = Math.floor(Math.random() * passwordCharacteristics.length);
            password += passwordCharacteristics[randomIndex];
        }

    return password;
    }