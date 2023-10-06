const express = require("express");
// import all calculator routes
const calculatorRoutes =
require('./Routes/calculatorRoutes');
const app = express();
const app2 = express();

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes)
const port = 3000;
const port2 = 3001;

//This is the code to use our html, css, etc
app.use('/', express.static('Public'))

/* Exercise 1 code for testing routes(commented out)
app.get("/test2", (req, res) => {
  res.send("This is a test");
});*/
app.listen(port, () => {
  console.log(`Example app listening
    at http://localhost:${port}`);
});

/*Exercise 1 code for testing routes(commented out)
app2.get("/", (req, res) => {
  res.send("What up!");
});
app2.get("/test3", (req, res) => {
  res.send("This is also a test");
});*/
app2.listen(port2, () => {
  console.log(`Example app listening
      at http://localhost:${port2}`);
});
