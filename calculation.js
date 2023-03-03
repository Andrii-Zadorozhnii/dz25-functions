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

let excersFourInputNumber = document.querySelector(".excersize-four__input");
let excersFourButton = document.querySelector(".excersize-four__button");
let excersFourUnswer = document.querySelector(".excersize-four__unswer");

excersFourButton.onclick = function () {
    function fact(num){
        let mult = excersFourInputNumber;
        for(i=1;i<=num;i++){
            mult *= i; 
        }
        return mult;
    }
    excersFourUnswer.innerHTML = fact(excersFourInputNumber.value);
}


