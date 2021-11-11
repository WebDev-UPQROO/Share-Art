import axios from "axios";
import API from "./constants";

export const getUser = async (uid) => {
  try {
    const data = await axios.get(API.base + API.getUser + uid);
    return data;
  } catch ({response: {data, status}}) {
      throw(Error(`Error ${status} - ${data.error}`));
  }
};
