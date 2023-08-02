import axios from "axios";

export const getListProductHomeAPI = async () => {
  return axios.get("http://localhost:5001/home");
};
