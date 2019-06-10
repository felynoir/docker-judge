const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const fs = require("fs");
const https = require("https");

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded

// parse application/json
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  const data = {
    _id: "5cfe4c6390d61e1eb9898a61",
    url:
      "https://storage.googleapis.com/hell-grade.appspot.com/users%2F5cdc702d3b3a26257764ddc9%2F5.cpp?GoogleAccessId=firebase-adminsdk-k49rk%40hell-grade.iam.gserviceaccount.com&Expires=1742144400&Signature=Xs96%2BFLrip%2BexVFgql%2BTaLOtmkVbk6FM0ZYt%2FbqOhXqt4lCykgYB4fZlpEHtTXk%2FC0owE61ALugQZka7KZcRCLHZQ2j96ZLk8WWi59WW8cJ%2BU8SKW%2Bo%2Fvg%2FqmrI7NdzYIq2bRMZAD5fkbmN27BWkzlM%2BvWeBHG%2BuTN3Xj0SqjlOb51ABvy5Gcd%2BU%2BUn5Vmllv4LzwUUG6uKP0EgbPiQKe43MbY96%2BxoSmiGjAicxm5WXfQj1lU%2F%2FHwm5WTWi%2BBtEd8JiRC4Cb1Lr1ThR2%2F1V1Hk6E7xSJkhHc1GWlZNYFTLJ2gQ%2Bt2NYhult34r5IhIEAa93szMuYSjsD8s9hkebOA%3D%3D",
    inputs: [
      "https://storage.googleapis.com/hell-grade.appspot.com/new_2%2F1.in?GoogleAccessId=firebase-adminsdk-k49rk%40hell-grade.iam.gserviceaccount.com&Expires=1742144400&Signature=BiyTfPCNtKohQYO9%2FC0lPxpsjGsKe4r16nl5O5JhG7BshJIzYrSMa8EdKQJubtPlaRB8eZ5i%2BpWFsEiQ6LzXfKbC2dRMx%2F%2BvjvJlB8eXYubwbGmRqaeVdNIZanlIDsitpjZwYch5u%2F5TlaX4dES1T8M7QW%2FWVq5YEmhZARNx0QDMoLyOzir%2BzXPCuX%2Fz0UFM16yYVp%2B9oH25Ol87NWJ6wuKex5IM0O7I%2BsaTDak6BaAZ78iKifyRqZh%2Bxw785kAMGBH1RRuODPBKIoZndF7Bra%2B15HOXKu9XVWMohaLw46YeTY2KIoGFCFV2emqr8SWN3YlNuZfZ7fGeDFpmXo565A%3D%3D",
      "https://storage.googleapis.com/hell-grade.appspot.com/new_2%2F2.in?GoogleAccessId=firebase-adminsdk-k49rk%40hell-grade.iam.gserviceaccount.com&Expires=1742144400&Signature=Fzg%2BerxAqBdZk%2B8IqIz5o31zgGPSO2EkjpSnqFSQ%2FKtYgwNEUCsvk6slsqkkuRmbi%2FtUwnsTkJQhbBgKBPL%2FiEG2LzNiKwN8gt8KK88%2B%2BhFgft7N0e8GP9NpJ5K7uGPRPBm4qgMbzwrLKxRQMOFowGEiStcnmTaG3PFPM9SudU1A1ttOXP32W7POX6YhhCOiMdkg2y8SmyULUNC%2F7NqNDAxyCYqw12zdvsGqKkIjz6pX8PrWLpbnjms%2BSe%2BY7f0bKgs84PE5mykXMdPWR%2F45WyDu0vMv5iJQ89A7qS4mDBt5hUlyrLqr9AiuiTchDlCbGc5Au20pEhxLOdBbsQtZBQ%3D%3D"
    ],
    outputs: [
      "https://storage.googleapis.com/hell-grade.appspot.com/new_2%2F1.sol?GoogleAccessId=firebase-adminsdk-k49rk%40hell-grade.iam.gserviceaccount.com&Expires=1742144400&Signature=XvYUx2An28P%2B49o7q3TpihYlbakCuj2C9qsbBTmpfwxq4OxZC9MGUylAL6jvXWxO%2FfXNsMsn8%2FOaduRzfFOIDvIsEFyoX0ATCRTo6MSe1j%2BSzgHcz1AzuAfEPfyROkqyPqIXnwlbLUGtWWoeqvyB6IP1O9Ngr359LZkNFEjGK9u6tu8Sxp1qY0ytdWQo0o0iVHk5FYFZZaOtikTnZWFb4b%2BW4PuhhUVwMJoqJcvFXFDGvmxYOiw4VueCxYpkpGVlkj6m9WqN7jFHEQeNybJAex%2FyYKpc%2FNVuDpH%2FDzRy9pU6bPmBuQtapAZ9%2Fg65k7B%2FLPRrSo2MZ0xKJtoEa6rkhA%3D%3D",
      "https://storage.googleapis.com/hell-grade.appspot.com/new_2%2F2.sol?GoogleAccessId=firebase-adminsdk-k49rk%40hell-grade.iam.gserviceaccount.com&Expires=1742144400&Signature=cS0MqT8%2B7BQDk6cDm4KPcMNQvspsP5LFSRX3JYZrp9Fjly%2B5ZYHkrmMBVvsOLdDg25oox0xHhz5b6OImg0lhWZ%2FnwDwjf%2FI3t2XSUZYb38D3K1wcWdus0RhHSGg1ufIELsvXiKN9sXh4miP8lqdDpmxTZyYpEbVAERiGKbzaD%2BxFoHOA0g7tWqhYXI51R1p8XzJgd3I8rWMrqV9xkHi1OXNiKW4erOAptnp%2BkZFdbCMqzYJdey0RHEGzA13WlPo3EHXvBCJrjKibPw7X7K3r3mgWYoTATHk%2BYM9Vyg2Z4r2uifz8q0SofIkqHVD2vBq3vAtXfBtFyTjhChVeSbJa6g%3D%3D"
    ]
  };
  const file = fs.createWriteStream(`main.cpp`);
  https.get(data.url, response => {
    const { statusCode } = response;

    let error;
    if (statusCode !== 200) {
      error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
    }

    if (error) {
      console.error(error.message);
      // Consume response data to free up memory
      response.resume();
      return;
    }

    response.pipe(file).on("close", () => {
      res.status(200).json("end");
    });
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
