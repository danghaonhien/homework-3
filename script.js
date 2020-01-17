
//Add function for slider
let $levelEl = document.querySelector("#level");
let $charNumbEl = document.querySelector("#charNumb");

// Add function to let slider move as number change
$levelEl.addEventListener("input", levelValue);
$charNumbEl.addEventListener("input", levelValue);

//target value change
function levelValue(event) {
    let value = event.target.value;
    $levelEl.value = value;
    $charNumbEl.value = value;
};



//Add document for formMain
let $needUpperCase = document.querySelector("#needUpperCase");
let $needNumber = document.querySelector("#needNumber");
let $needSpecialChar = document.querySelector("#needSpecialChar");

let $formEl = document.querySelector("#formMain");



 //create variables options for Uppercase, Lowercase, Number and Special Character from charCode

 let $upperCaseCodes = arrayAZ(65,90);
 let $lowerCaseCodes = arrayAZ(97,122);
 let $numberCodes = arrayAZ(48,57);

 // .concat() to connect another set of codes
 let $specialCharacterCodes = arrayAZ(33,47).concat(
     arrayAZ(58,64)
     ).concat(
         arrayAZ(91,96)
         ).concat(
             arrayAZ(123,126)
         )

         
//Add array and make loop to let passwords push characters through charCode

function arrayAZ(A,Z) {
    let array = []
    for (let i = A ; i<= Z ; i++) {
        array.push(i);
    }
    //return array to get value
    return array;
}

    //display passwords
    let $showPassword = document.querySelector("#password");
//Add function to formMain
$formEl.addEventListener('submit', e => {
    e.preventDefault();
    let characterNumber = $charNumbEl.value;
    //check if box is true//false
    let needUpperCaseEl = $needUpperCase.checked
    let needNumberEl = $needNumber.checked
    let needSpecialCharEl = $needSpecialChar.checked
    //create password holder and connect to html passwords
    let password = passwordGenerator(characterNumber, needUpperCaseEl, needNumberEl, needSpecialCharEl);

    //display passwords in Html
    $showPassword.innerText = password;
})

//Add function for password
function passwordGenerator(characterNumber, needUpperCaseEl, needNumberEl, needSpecialCharEl) {

//Add CharCode
let charCodes = $lowerCaseCodes;
//Create conditions for the checkbox and merge the condition by .concat
if (needUpperCaseEl) charCodes = charCodes.concat($upperCaseCodes);
if(needNumberEl) charCodes=charCodes.concat($numberCodes);
if(needSpecialCharEl)charCodes=charCodes.concat($specialCharacterCodes);
//Add array and loop of code options

let passwordCodes = [];
for (let i = 0; i < characterNumber; i++) {
    //set probability and round number from charCodes list
    let passwordGenerateCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    //push string.fromCharCode
    passwordCodes.push(String.fromCharCode(passwordGenerateCode));
}
//make character as string
return passwordCodes.join('');
}








   