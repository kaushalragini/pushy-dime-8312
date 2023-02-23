import axios from "axios";
import { router } from "json-server";
import { baseURL } from "../../Components/nikhil/Products";
import { FILTER_PRODUCTS, GET_PRODUCTS, SORT_PRODUCTS } from "./actionTypes";

export const get_products =
  ({ page, max, min, sort, order, categeory, subcategeory }) =>
  async (dispatch) => {
    let res = await axios.get(
      `${baseURL}/products?page=${page}&max=${max}&min=${min}&sort=${sort}&order=${order}&categeory=${categeory}&subcategeory=${subcategeory}`
    );
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  };

export const filter_products =
  ({ categeory, subcategeory }) =>
  async (dispatch) => {
    let res = await axios.get(`${baseURL}/filter${categeory}/${subcategeory}`);
    dispatch({ type: GET_PRODUCTS, payload: res.data });
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

export const sort_products =
  ({ categeory, subcategeory }) =>
  async (dispatch) => {
    let res = await axios.get(`${baseURL}/sort${categeory}/${subcategeory}`);
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  };

export const range_products =
  ({ min, max }) =>
  async (dispatch) => {
    let res = await axios.get(`${baseURL}/price?min=${min}&max=${max}`);
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  };