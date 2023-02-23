const { ProductsModel } = require("../../Models/products.model");

const { changetoArray } = require("../../Calculate/queryFunc");

const getAllProducts = async (req, res) => {
  // ! ALL Filters should be there
  const queries = req.query;
  // console.log(queries);
  let { filter, operatorArr } = changetoArray(queries); //* gives the required query schemas
  // console.log(operatorArr);
  // console.log(filter);
  try {
    // * ({$and: [{title: {$in: ['True Spirit', 'Empire of Light', 'Infiesto']}}, ..and all]})
    let query = ProductsModel.find({ $and: filter }); //* all keys filters getting from Calculations
    // let query = ProductsModel.find({ brand: "AMIRI" });

    //* search added
    if (queries["q"]) {
      query = query.find({
        $or: [
          {
            brand: { $regex: `${queries["q"]}`, $options: "i" },
          },
          {
            product_name: { $regex: `${queries["q"]}`, $options: "i" },
          },
          {
            category: { $regex: `${queries["q"]}`, $options: "i" },
          },
        ],
      });
    }

    //* operator added
    if (operatorArr.length > 0) {
      for (let i = 0; i < operatorArr.length; i++) {
        for (let key in operatorArr[i]) {
          if (operatorArr[i][key].operator === "lte") {
            query.where(key).lte(operatorArr[i][key].val);
          } else if (operatorArr[i][key].operator === "lt") {
            query.where(key).lt(operatorArr[i][key].val);
          } else if (operatorArr[i][key].operator === "gte") {
            query.where(key).gte(operatorArr[i][key].val);
          } else if (operatorArr[i][key].operator === "gt") {
            query.where(key).gt(operatorArr[i][key].val);
          }
        }
      }
    }

    //* sort added
    if (queries["sort"]) {
      query = query.sort(queries["sort"].replace(",", " "));
    }
    //* limit added
    if (queries["limit"]) {
      query = query.limit(+queries["limit"]);
    }
    //* page added
    if (queries["page"]) {
      if (queries["limit"]) {
        query = query.skip((+queries["page"] - 1) * queries["limit"]);
      } else {
        query = query.skip((+queries["page"] - 1) * 20);
      }
    }
    //! END of filter
    const data = await query;
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
  getAllProducts,
};
