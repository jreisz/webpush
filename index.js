const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")));

const publicVapidKey =
  "BCuo3HAxM2XGVVabyefraTb1oIDHDGCPtJcd2xasdHrtoztE77kGCYx1F6s1uHGUsr9HjUsEtlvHGVkPT3SrEtM";
const privateVapidKey = "tNRw1yv1b7m5NjhiYM3OAMsMvL-3XXogm9wvIqsged0";

webpush.setVapidDetails(
  "mailto:reisz@hotmail.it",
  publicVapidKey,
  privateVapidKey
);

app.post("/subscribe", (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({
    title: "Hello World",
    body: "This is your first push notification",
  });
  webpush.sendNotification(subscription, payload).catch(console.log);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
