import axios from "axios";

const getListProduct = async (api) => {
  try {
    const response = axios.get(api);
    return response;
  } catch (err) {}
};
const getListProductHome = async () => {
  try {
    const response = axios.get("http://localhost:5001/home");
    return response;
  } catch (err) {}
};
const createOrder = async (order) => {
  try {
    const response = axios.post("http://localhost:5001/order", order);
    return response;
  } catch (err) {}
};

export { getListProduct, getListProductHome, createOrder };
