const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");

// const fetch = require("node-fetch");
// create  instance
const app = express();

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// api call
const BASE_URL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${apiKey}`);
let inputFromUser = {};

app.post("/api", async (req, res) => {
  inputFromUser = req.body.url;
  const fullUrl = `${BASE_URL}key=${apiKey}&url&txt=${inputFromUser}&lang=en`;

  // show URL for API call
  console.log("url API request");
  console.log(fullUrl);

  // push the request
  const response = await axios.post(fullUrl);
  
  // get the result
  const result = await response.data;
  
  // dump the result
  console.log(result);
  
  // return the result to caller
  res.send(result);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("NLP Evaluate app listening on port 8080");
});
