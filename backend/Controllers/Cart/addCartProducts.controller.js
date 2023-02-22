const { CartModel } = require("../../Models/cart.model");

const addCartProducts = async (req, res) => {
  const body = req.body;
  //* For Creating date inside the backend only
  let date = new Date();
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ];
  try {
    const cart = new CartModel({ ...body, date: `${year}-${month}-${day}` });
    await cart.save();
    res.send({ msg: "Products Added into Cart" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addCartProducts,
};
