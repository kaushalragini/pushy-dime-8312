const { CartModel } = require("../../Models/cart.model");

const getAllCartProducts = async (req, res) => {
  const query = req.query;
  try {
    const data = await CartModel.find(query)
      .populate("productsId")
      .populate("userId");
    res.send({
      status: "success",
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getAllCartProducts,
};
