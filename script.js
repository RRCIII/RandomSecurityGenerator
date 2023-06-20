var passwordLength = 8;
var characterPool = [];

var includeLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var includeUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var includeNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var includeSpecial = ["!" ,"@" ,"#", "$", "%",".", "?","/","|"];

var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword); 
function writePassword() {
    var reWritePrompts = prompts(); 
    var passwordText = document.querySelector("#password");
    
    if(reWritePrompts) { 
      var passwordSecurity = generatePassword();
      passwordText.value = passwordSecurity; 
    } else {
      passwordText.value = ""; 
    }
}    

function generatePassword() {
  var password = "";
  for( var i = 0; i < passwordLength; i++) {
       var randomCatalog = Math.floor(Math.random() * characterPool.length);
        password = password + characterPool[randomCatalog];
  }
  return password;
}  

function prompts() {
    characterPool = [];
  
    passwordLength = parseInt(prompt("Enter password length (8 - 128 characters.")); 
     
      if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
          alert("Invalid password length. Enter password length between 8 and 128. Please try again.");
          return false;
      }
  
      if(confirm("would you like special characters in your password?")) {
        characterPool = characterPool.concat(includeSpecial);
      }
    
      if(confirm("would you like uppercase letters in your password?")) {
        characterPool = characterPool.concat(includeUppercase);
      }
    
      if(confirm("would you like lowercase letters in your password?")) {
        characterPool = characterPool.concat(includeLowercase);
      }
  
      if(confirm("would you like numeric values in your password?")) {
        characterPool = characterPool.concat(includeNumeric);
      }
      return true;
  }