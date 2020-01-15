
//Add function for slider
let $levelEl = document.querySelector("#level");
let $charNumbEl = document.querySelector("#charNumb");

$levelEl.addEventListener("input", levelValue);
$charNumbEl.addEventListener("input", levelValue);

function levelValue(event) {
    let value = event.target.value;
    $levelEl.value = value;
    $charNumbEl.value = value;
}

??