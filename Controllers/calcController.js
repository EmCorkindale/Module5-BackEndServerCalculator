const Calculator = require("../Models/Calculator");
let myCalc = new Calculator();
const Logging = require("../Models/Logging")
let log = new Logging();

// Logic for addition
const add = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  if (!isNaN(number1) && !isNaN(number2)) {
    const result = myCalc.add(number1, number2);
    log.log(myCalc.id, result);
    res.json({ result });
  }
};
// Logic for subtraction
const subtract = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  if (!isNaN(number1) && !isNaN(number2)) {
    const result = myCalc.subtract(number1, number2);
    log.log(myCalc.id, result);
    res.json({ result });
  }
};
// Logic for division
const divide = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  if (!isNaN(number1) && !isNaN(number2)) {
    const result = myCalc.divide(number1, number2);
    log.log(myCalc.id, result);
    res.json({ result });
  }
};
// Logic for multiplication
const multiply = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  if (!isNaN(number1) && !isNaN(number2)) {
    const result = myCalc.multiply(number1, number2);
    log.log(myCalc.id, result);
    res.json({ result });
  }
};
module.exports = { add, subtract, divide, multiply };
