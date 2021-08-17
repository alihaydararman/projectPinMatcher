function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('dishplay-pin').value = pin;

};

document.getElementById('key-pad').addEventListener('click', function (even) {
    const number = even.target.innerText;
    const calcInput = document.getElementById('type-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {

        const previousNumber = calcInput.value;
        const newCalc = previousNumber + number;
        calcInput.value = newCalc;
    }

});

function veryfyPin() {
    const pin = document.getElementById('dishplay-pin').value;
    const typeNumbers = document.getElementById('type-number').value;
    const faildMessage = document.getElementById('notify-faild');
    const successMessage = document.getElementById('notify-success');
    if (pin == typeNumbers) {
        successMessage.style.display = 'block';
        faildMessage.style.display = 'none';
    } else {
        faildMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

