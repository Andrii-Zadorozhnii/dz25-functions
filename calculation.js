let inputArgumentsList = [];

let addNumbersToListButton = document.querySelector(".excersize-two__button-add");
let calculateItemsButton = document.querySelector(".excersize-two__button-calculate");
let inputArgument = document.querySelector(".excersize-two__argument");
let exersizeTwoUnswer = document.querySelector(".excersize-two__unswer");

addNumbersToListButton.onclick = function() {
    inputArgumentsList.push(inputArgument.value);
    console.log("add argument");
    console.log(inputArgumentsList);
}

calculateItemsButton.onclick = function() {
    exersizeTwoUnswer.innerHTML = `Total arguments is : ${inputArgumentsList.length}`;
    console.log(inputArgumentsList.length);
}


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
    console.log(typeof (heightSize.value));
    console.log(typeof (widthSize.value));
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

// //_____7______
// let excersSevenInputNumber = document.querySelector(".excersize-seven__input");
// let excersSevenButton = document.querySelector(".excersize-seven__button");
// let excersSevenUnswer = document.querySelector(".excersize-seven__unswer");

// excersSevenButton.onclick = function () {
//     function numIsPerfect(excersSevenInputNumber) {
//         console.log("hello");
//         num = parseInt(excersSevenInputNumber.value);
//         let sum = 0;
//         for (i = 1; i < num; i++) {
//             if (num % i == 0) {
//                 sum += i;
//             }
//         }
    
//         if (sum === num && sum!== 0) {
//             excersSevenUnswer.innerHTML = (`Число ${num} є досконалим числом`);
//             return console.log(`Число ${num} є досконалим числом`);
//         } else {
//             excersSevenUnswer.innerHTML = (`Число ${num} не є досконалим числом`);
//             return console.log(`Число ${num} не є досконалим числом`);
//         };
//     }
// }

