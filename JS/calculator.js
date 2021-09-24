const INPUT1 = document.querySelector("#TextInput1");
const INPUT2 = document.querySelector("#TextInput2");
const SIGN = document.querySelector(".sign");
const RESULT = document.querySelector(".result");
const OUTPUT = document.querySelector(".op-result");

const ERR1 = "You can't divide by zero";
const ERR2 = "You can't calculate the factorial of a negative number.";
const ERR3 = "I can't calculate that, the number is too big!";

let num1 = 0;
let num2 = 0;

// Obtain the value of the input everytime it changes and uptade num1 and num 2
const getValue1 = () => (num1 = Number(INPUT1.value));
const getValue2 = () => (num2 = Number(INPUT2.value));

//Auxiliary Functions
const logResult = (result, sign, type) => {
  if (type != "Factorial") {
    console.log(`${type}\n${num1} ${sign} ${num2} = ${result}`);
  } else {
    console.log(`${type}\n${num1}${sign} = ${result}`);
  }
};

const display = (result, sign, type) => {
  logResult(result, sign, type);
  SIGN.innerHTML = `${sign}`;
  RESULT.innerHTML = result;
  OUTPUT.style.display = "initial";
};

const doFactorial = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * doFactorial(n - 1);
  }
};

//Keyboard Functions
const sum = () => {
  let sum = num1 + num2;
  display(sum, "+", "Sum");
};

const substract = () => {
  let subs = num1 - num2;
  display(subs, "-", "Substraction");
};

const multiply = () => {
  let mult = num1 * num2;
  display(mult, "*", "Multiplication");
};

const divide = () => {
  if (num2 === 0) {
    console.log(ERR1);
    window.alert(ERR1);
  } else {
    let div = num1 / num2;
    if (div.toString().split("").length > 9) {
      div = div.toPrecision(8);
    }
    display(div, "/", "Division");
  }
};

const factorial = () => {
  if (num1 < 0) {
    window.alert(ERR2);
    console.log(ERR2);
  } else if (num1 > 100) {
    window.alert(ERR3);
    console.log(ERR3);
  } else {
    let fact = doFactorial(num1);
    if (fact.toString().split("").length > 9) {
      fact = fact.toExponential(8);
    }
    display(fact, "!", "Factorial");
  }
};

const power = () => {
  let pow = num1 ** num2;
  if (pow.toString().split("").length > 9) {
    pow = pow.toExponential(8);
  }
  display(pow, "^", "Exponentiation");
};

const clearScr = () => {
  num1 = 0;
  num2 = 0;
  INPUT1.value = "0";
  INPUT2.value = "0";
  SIGN.innerHTML = "?";
  OUTPUT.style.display = "none";
};
