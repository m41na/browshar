const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dataLoader = require("./dataLoader");

const app = express();
const port = 5001;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/data", dataLoader);

app.get("/", function (req, res) {
  res.redirect(301, "/data");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
