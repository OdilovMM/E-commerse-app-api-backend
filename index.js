const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/user");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection is successfull"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
