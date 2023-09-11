const express = require("express");
const router = express.Router();
const Product = require("../Models/Product.model");

router.get("/", async (req, res) => {
  try {
    const results = await Product.find({}, {});
    res.send(results);
  } catch (error) {
    console.log("error");
  }
});

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

// router.post("/", (req, res) => {
//   console.log(req.body);
//   const product= new Product({
//     name :req.body.name,
//     price :req.body.price
//   })
//   product.save().then(result=>{res.send(result)});
// });

router.get("/:name", async (req, res) => {
  const Name=req.params.name;
  try {
    // const product =await Product.findById(id);
    const product = await Product.findOne({name: Name})
    res.send(product)
  } catch (error) {
    console.log(error.message)
  }
});
router.patch("/:id", async (req, res) => {
try {
  const id=req.params.id
  const updates =req.body
   const result = await Product.findByIdAndUpdate(id,updates)
   res.send(result)
} catch (error) {
  console.log("Error")
}


});
router.delete("/:name", async (req, res) => {
  const Name =req.params.name
  try {
    const product = await Product.findOneAndDelete({name:Name})
    res.send(product)
    console.log("uda diya")
  } catch (error) {
    console.log("error deleting")
  }
});
module.exports = router;
