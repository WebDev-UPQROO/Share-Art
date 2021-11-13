import axios from "axios";
import API from "./constants";

export const getPosts = async (idUser, lastPost = null) => {
  const body = { idUser };
  if (lastPost) body["idPost"] = lastPost;

  try {
    const data = await axios.put(API.base + API.getHomePost, body);
    return data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};
