const express = require("express");
const app = express();
const Product = require("./models").product;
const Category = require("./models").category;

const PORT = 4000;

app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.findAll({ include: [Category] });
    res.send(allProducts);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }
});

app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }
});

app.listen(PORT, () => console.log("running on port 4000"));
