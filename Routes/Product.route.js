const express = require("express");
const prouter = express.Router();
const Product = require("../Models/Product.model");

prouter.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log("error");
  }
});

//Two Optional Parameters 1.Query 2.Projection
prouter.get("/", async (req, res) => {
  try {
    const results = await Product.find({}, {});
    res.send(results);
  } catch (error) {
    console.log("Error");
  }
});

prouter.get("/:name", async (req, res) => {
  const pname = req.params.name;
  try {
    const prodcut = await Product.findOne({name:pname});
    res.send(prodcut);
  } catch (error) {
    console.log("Error");
  }
});

module.exports = prouter;
