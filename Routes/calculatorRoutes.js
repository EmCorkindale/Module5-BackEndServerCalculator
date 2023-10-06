const express = require("express");
const router = express.Router();
module.exports = router;
// new route for adding two numbers
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})
// new route for subtracting two numbers
router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 - number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})
// new route for dividing two numbers
router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 / number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})
// new route for multiplying two numbers
router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 * number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})