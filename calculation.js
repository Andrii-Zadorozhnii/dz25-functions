let inputArgumentsList = [];

let addNumbersToListButton = document.querySelector(
    ".excersize-two__button-add"
);
let calculateItemsButton = document.querySelector(
    ".excersize-two__button-calculate"
);
let inputArgument = document.querySelector(".excersize-two__argument");



// _____3______

let excersThreeButton = document.querySelector(".excersize-three__button");
let firstNumber = document.querySelector(".excersize-three__input-one");
let secondNumber = document.querySelector(".excersize-three__input-two");
let excersThree = document.querySelector(".excersize-three__unswer");

excersThreeButton.onclick = function () {
    if (parseInt(firstNumber.value) < parseInt(secondNumber.value)) {
        excersThree.innerHTML = "-1";
        console.log("-1");
    } else if (parseInt(firstNumber.value) > parseInt(secondNumber.value)) {
        excersThree.innerHTML = "1";
        console.log("1");
    } else if (parseInt(firstNumber.value) === parseInt(secondNumber.value)) {
        excersThree.innerHTML = "0";
        console.log("0");
    }
}

// _____4______


let excersFourButton = document.querySelector(".excersize-four__button");
let excersFourUnswer = document.querySelector(".excersize-four__unswer");
let excersFourInputNumber = document.querySelector(".excersize-four__input");

function factorial(n) {
    if (n < 0) {
        return -1;
    } else if (n === 0) {
        return 1;
    } else if (n === undefined) {
        console.log("undefined");
    } else {
        return (n * factorial(n - 1));
    }
}

excersFourButton.onclick = function () {
    excersFourUnswer.innerHTML = factorial(parseInt(excersFourInputNumber.value));
    console.log(factorial(parseInt(excersFourInputNumber.value)));
}

// _____5______

let excersFiveButton = document.querySelector(".excersize-five__button");
let listnumbers = [];

excersFiveButton.onclick = function () {
    for (let i = 0; i < 3; i++) {
        let a = +prompt("Write a number");
        listnumbers.push(a);
        if (listnumbers.length === 3) {
            let convertToString = String(listnumbers[0]) + String(listnumbers[1]) + String(listnumbers[2]);
            let convertToNumber = parseInt(convertToString);
            alert("typeof : " + typeof (convertToNumber) + " => " + convertToNumber);
            console.log(typeof (convertToNumber));
            console.log(String(convertToNumber));
        }
    }
}


// _____6______

let heightSize = document.querySelector(".excersize-six_input-height");
let widthSize = document.querySelector(".excersize-six_input-width");
let excersSixButton = document.querySelector(".excersize-six__button");
let excersSixUnswer = document.querySelector(".excersize-six__unswer");

excersSixButton.onclick = function () {
    console.log(typeof(heightSize.value));
    console.log(typeof(widthSize.value));
    if (parseInt(heightSize.value) > 0 && parseInt(widthSize.value) > 0) {
        let square = parseInt(widthSize.value) * parseInt(heightSize.value);
        excersSixUnswer.innerHTML = square;
        console.log("1");
    } else if ((parseInt(heightSize.value) === 0 || undefined || NaN || null) && parseInt(widthSize.value) > 0) {
        let square = parseInt(widthSize.value) ** 2
        excersSixUnswer.innerHTML = square;
        console.log("2");
    } else if (parseInt(heightSize.value) > 0 && (parseInt(widthSize.value) === 0)) {
        let square = parseInt(heightSize.value) ** 2
        excersSixUnswer.innerHTML = square;
        console.log("3");
    } else {
        excersSixUnswer.innerHTML = "please enter valid input";
    }
}
