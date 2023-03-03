let inputArgumentsList = [];

let addNumbersToListButton = document.querySelector(".excersize-two__button-add");
let calculateItemsButton = document.querySelector(".excersize-two__button-calculate");
let inputArgument = document.querySelector(".excersize-two__argument");



// 3

let firstNumber = document.querySelector(".excersize-three__input-one");
let secondNumber = document.querySelector(".excersize-three__input-two");
let excersThree = document.querySelector(".excersize-three__unswer");
let excersThreeButton = document.querySelector(".excersize-three__button");

// excersThreeButton.onClick = function excersizeThree(firstNumber, secondNumber) {
//     if (+firstNumber.value < +seconNumber.value) {
//         excersThree.innerHTML = "-1";

//         return excersThree;
//     } else if (+firstNumber.value > +secondNumber.value) {
//         excersThree.innerHTML = "1";

//         return excersThree;
//     } else if (+firstNumber.value === +secondNumber.value) {
//         excersThree.innerHTML = "0";
//         console.log("0");
//     }
// }


function excersizeThree(firstNumber, secondNumber) {
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

excersThreeButton.addEventListener("click", excersizeThree(firstNumber, secondNumber));




