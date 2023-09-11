const express = require("express");
const prouter = express.Router();
const Product = require("../Models/Product.model");

prouter.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log("Error");
  }
});

prouter.get('/', async (req,res)=>{
try {
    const results = await Product.find({},{__v:0})
    res.send(results)
} catch (error) {
    console.log("Getting Product")
}

})

prouter.get('/:id',async (req,res)=>{
  const id = req.params.id;
  try {
    //const product = await Product.findById(id)
    const product = await Product.findOne({_id:id});
    res.send(product)
  } catch (error) {
    console.log("error")
  }
})


module.exports = prouter;
