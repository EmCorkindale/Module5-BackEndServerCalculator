const express = require("express");
const router = express.Router();
const calcController = require("../Controllers/calcController");
module.exports = router;
// new route for adding two numbers
router.get("/add", (req, res) => {
  calcController.add(req, res);
});
// new route for subtracting two numbers
router.get("/subtract", (req, res) => {
  calcController.subtract(req, res)
});
// new route for dividing two numbers
router.get("/divide", (req, res) => {
  calcController.divide(req, res)
});
// new route for multiplying two numbers
router.get("/multiply", (req, res) => {
  calcController.multiply(req, res)
});
