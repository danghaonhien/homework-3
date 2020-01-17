
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



//Add function for form
let $showPassword = document.querySelector("#password");
let $formEl = document.querySelector("#formMain");
$formEl.addEventListener('submit', event);
function event() {
    event.defaultPrevented();
    let characterNumber = $charNumbEl.value;
    let needUpperCase = document.querySelector("#needUpperCase");
    let needNumber = document.querySelector("#needNumber");
    let needSpecialChar = document.querySelector("#needSpecialChar");
    let password = passwordGenerator(characterNumber, needUpperCase, needNumber, needSpecialChar);
    $showPassword.innerText = password;
}