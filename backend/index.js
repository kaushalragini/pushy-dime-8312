require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Routes/users.routes");
const { productsRouter } = require("./Routes/products.routes");
const { cartRouter } = require("./Routes/cart.routes");
const { orderedProductsRouter } = require("./Routes/orderedProducts.routes");
const { productsRatingRouter } = require("./Routes/productsRatings.routes");
const { userFeedbackRouter } = require("./Routes/userFeedback.routes");

const app = express();
app.use(express.json());
app.use(cors());

/**
 * * Routes Middlewares
 */
app.use("/users", userRouter);
app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/orderedproducts", orderedProductsRouter);
app.use("/product/ratings", productsRatingRouter);
app.use("/user/feedback", userFeedbackRouter);

app.get("/", (req, res) => {
  res.send("HomePage");
});

// * Listen
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DataBase Connected");
  } catch (err) {
    console.log("DataBase Error");
  }
  console.log("Server is running");
});
