const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth.js");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart.js");
const orderRoute = require("./routes/order.js");
const stripeRoute = require('./routes/stripe.js')
const cors = require('cors')

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection is successfull"))
  .catch((err) => console.log(err));

  app.use(cors())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use('/api/checkout', stripeRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
