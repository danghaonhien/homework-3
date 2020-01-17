
//Add function for slider
let $levelEl = document.querySelector("#level");
let $charNumbEl = document.querySelector("#charNumb");

$levelEl.addEventListener("input", levelValue);
$charNumbEl.addEventListener("input", levelValue);

function levelValue(event) {
    let value = event.target.value;
    $levelEl.value = value;
    $charNumbEl.value = value;
};



//Add document for formMain
let $needUpperCase = document.querySelector("#needUpperCase");
let $needNumber = document.querySelector("#needNumber");
let $needSpecialChar = document.querySelector("#needSpecialChar");
let $showPassword = document.querySelector("#password");
let $formEl = document.querySelector("#formMain");
//Add function to formMain
$formEl.addEventListener('submit', event);
function event() {
    event.defaultPrevented();
    let characterNumber = $charNumbEl.value;
    //check if box is true//false
    let needUpperCaseEl = $needUpperCase.checked
    let needNumberEl = $needUpperCase.checked
    let needSpecialCharEl = $needUpperCase.checked
    //create password holder and connect to html passwords
    let password = passwordGenerator(characterNumber, needUpperCaseEl, needNumberEl, needSpecialCharEl);
    $showPassword.innerText = password;
}
//Add function for password
function passwordGenerator(characterNumber, needUpperCaseEl, needNumberEl, needSpecialCharEl)

//Add CharCode

//Add array and make loop to let passwords push characters through charCode

function arrayAZ(A,Z) {
    let array = []
    for (let i = A; i<= Z , i++) {
        array.push[[i]];
    }
    //return array to get value
    return array;
}

    //