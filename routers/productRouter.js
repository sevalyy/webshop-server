const { Router } = require("express");
const router = new Router();
const Product = require("../models").product;
const Category = require("../models").category;

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll({ include: [Category] });
    res.send(allProducts);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const productById = await Product.findByPk(id);
    res.send(productById);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
