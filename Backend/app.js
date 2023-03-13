// require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');
const cookie = require('cookie-parser')
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
const cors = require("cors");

const farmerRegisterRouter = require("./routes/farmerRegister");
const farmerLoginRouter = require("./routes/farmer");
const farmersRouter = require("./routes/getFarmer");
const productsRouter = require("./routes/product");
const createProductRouter = require("./routes/createProduct");
const customerRegisterRouter = require("./routes/customerRegister");
const customerLoginRouter = require("./routes/customer");
const distributorRegisterRouter = require("./routes/distributorRegister");
const distributorLoginRouter = require("./routes/distributor");
const logOutRouter = require("./routes/logout");
const cartRouter = require("./routes/cart");






const app = express();
app.use(express.json())
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(cookie())

const DB_NAME = "agrichainDB";

mongoose.connect("mongodb://0.0.0.0:27017/agrichainDB", {
  useUnifiedTopology: true, 
  useNewUrlParser: true
});

// mongoose.set("useCreateIndex", true);
const db = mongoose.connection; //access to the pending connection
db.on("error", (err) => {
  console.log(`Error in DB connection`);
  console.error(err);
});
db.once("open", () => {
  console.log(`Connected to the database : ${DB_NAME}`);
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));

// Routes START
app.use("/farmerLogin", farmerLoginRouter);
app.use("/farmerRegister", farmerRegisterRouter);
app.use("/farmerCreateProduct", createProductRouter);
app.use("/farmers", farmersRouter);
app.use("/products", productsRouter);
app.use("/customerLogin", customerLoginRouter);
app.use("/customerRegister", customerRegisterRouter);
app.use("/distributorLogin", distributorLoginRouter);
app.use("/distributorRegister", distributorRegisterRouter);
app.use("/logout", logOutRouter);
app.use("/cart", cartRouter);




app.listen(5000, function() {
    console.log("Server started on port 5000.");
});
  