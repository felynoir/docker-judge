const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const fs = require("fs");
const https = require("https");
const exec = require("child_process").exec;

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded

// parse application/json
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.get("/test3", (req, res) => {
  exec("gcc", (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
    res.status(200).json("ee");
  });
});

app.get("/", (req, res) => res.status(200).json("hello world"));

app.get("/hello", (req, res) => {
  const data = require("./mockup");
  const file = fs.createWriteStream(`judge/main.cpp`);
  https.get(data.url, response => {
    const { statusCode } = response;

    let error;
    if (statusCode !== 200) {
      error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
    }
    if (error) {
      console.error(error.message);
      response.resume();
      return;
    }

    response.pipe(file).on("close", () => {});
  });
});

app.post("/judge", async (req, res, next) => {
  console.log("Recieve task wait 10s");
  console.log(req.body);
  await sleep(30);
  console.log("--------------------");
  res.status(200).json("complete");
});
const sleep = s =>
  new Promise((resolve, reject) => setTimeout(resolve, 1000 * s));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
