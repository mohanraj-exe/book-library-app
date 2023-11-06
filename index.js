const express = require("express");
const app = express();
const dotenv = require("dotenv");

// imports
const dbConnect = require("./config/db");
const booksRoute  = require("./routes/booksRoute");

dotenv.config();
dbConnect();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ Message: "home screen" });
  next();
});

// route
app.use("/api/book", booksRoute);

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Port Started listening at ${port}`);
});
