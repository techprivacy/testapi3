const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://yogeshrao:learnandbuild@cluster0.8ev9i1z.mongodb.net/Ecommerce"
);

const ProductRoute =require('./Routes/Product.route')


app.use("/products", ProductRoute);

app.use((req, res) => {
  res.status = 404;
  res.send({ error: "not found" });
});
app.listen(3005, () => {
  console.log("server started");
});
