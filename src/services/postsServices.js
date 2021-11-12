import axios from "axios";
import API from "./constants";

export const getPosts = async (uid) => {
  try {
    const data = await axios.put(API.base + API.getHomePost, { idUser: uid });
    return data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};
