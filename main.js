let inputs = document.querySelectorAll("input");
let passWordFields = document.querySelectorAll(".pass-fields");
let passWordField = document.querySelector("[type='password']");
let launchButton = document.getElementById("launchButton");
let checkBoxesAndRanges = document.querySelectorAll('[type="checkbox"],[type="range"]')

function setDisabledToObjects(objects, value) {
    for (let input of objects) {
        input.disabled = value;
    }
}

setDisabledToObjects(inputs, true);
setDisabledToObjects(passWordFields, false);
launchButton.classList.toggle("activeButton");

function checkPassword() {
    if (passWordField.value === "TrustNo1") {
        setDisabledToObjects(inputs, false);
        setDisabledToObjects(passWordFields, true);
        launchButton.disabled = true;
    }
}

function conditionsForLaunchAreTrue() {
    for (let inp of checkBoxesAndRanges) {
        if (!(inp.value === '100' || inp.checked)) {
            return false;
        }
    }
    return true;
}

function activateLaunch() {
    if (conditionsForLaunchAreTrue()) {
        launchButton.disabled = false;
        launchButton.classList.toggle("activeButton");
    }
}

for (let inp of checkBoxesAndRanges) {
    inp.onchange = conditionsForLaunchAreTrue
}
document.querySelector(".second").addEventListener("click", checkPassword);
document.addEventListener('click', activateLaunch);
launchButton.addEventListener('click', function () {
    document.querySelector('.rocket').classList.toggle('rocketLaunch');
})