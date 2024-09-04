const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/username", function (req, res) {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({ usernamename: `${firstName} ${lastName}` });
});

app.post("/api/users", function (req, res) {
  const firstName = req.body.first;
  const lastName = req.body.last;
  res.json({
    username: {
      username: "fcc_test",
      _id: "5fb5853f734231456ccb3b05",
    },
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
