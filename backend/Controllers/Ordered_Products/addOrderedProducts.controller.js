const { CartModel } = require("../../Models/cart.model");
const { OrderedProductsModel } = require("../../Models/orderedProducts.model");

const addOrderedProducts = async (req, res, next) => {
  const { userId } = req.body;
  try {
    // * Get all the users Cart Products
    const data = await CartModel.find({ userId: userId });

    const orderedData = data.map((cart) => {
      //* This will be an array of users cart data which gets shifted to ordered data collection
      return {
        userId: cart.userId,
        productsId: cart.productsId,
        size: cart.size,
        date: cart.date,
        status: "pending",
        quantity: cart.quantity,
      };
    });

    // * add it to Ordered Products Collection
    await OrderedProductsModel.insertMany(orderedData);
    res.send({ msg: "Order Successful" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addOrderedProducts,
};
