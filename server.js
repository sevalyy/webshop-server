const express = require("express");
// const cors = require("cors");
const app = express();
const productRouter = require("./routers/productRouter");

const PORT = 4000;
app.use(express.json());
// app.use(cors);

app.get("/hello", (req, res) => {
  res.send("hello world");
});
app.use("/products", productRouter);
app.listen(PORT, () => console.log("running on port 4000"));
