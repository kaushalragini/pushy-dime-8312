import axios from "axios";
import { FILTER_PRODUCTS, GET_PRODUCTS, SORT_PRODUCTS } from "./actionTypes";

const baseURL = process.env.REACT_APP_URL;

export const get_products =
  ({ page, brand, q, sort, min, max }) =>
  async (dispatch) => {
    console.log(page);
    let res = await axios({
      method: "GET",
      baseURL,
      url: "products/all",
      params: {
        page,
        brand,
        q,
        sort,
        price_gte: min,
        price_lte: max,
        limit: 8,
      },
    });
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.data,
      params: { page, brand, q, sort, min, max },
    });
  };

// router.get("/filter", async (req, res) => {
//   const [categeory, subcategeory] = req.params.query;
//   try {
//     const filtered = await ProductModel.find({ categeory, subcategeory });
//     res.send(filtered);
//   } catch (error) {
//     res.send("error in filtering");
//   }
// });

// router.get("/sort", async (req, res) => {
//   const [sort, order] = req.params.query;
//   try {
//     const sorted = await ProductModel.find({ sort, order });
//     res.send(sorted);
//   } catch (error) {
//     res.send("error in filtering");
//   }
// });

// router.get("/range", async (req, res) => {
//   const [min, max] = req.params.query;
//   try {
//     const ranged = await ProductModel.find({
//       $and: [{ price: { $gt: min } }, { price: { $lt: max } }],
//     });
//     res.send(ranged);
//   } catch (error) {
//     res.send("error in filtering");
//   }
// });
