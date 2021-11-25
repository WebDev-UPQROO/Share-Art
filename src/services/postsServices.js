import axios from "axios";
import API from "./constants";

export const getHomePosts = async (idUser = null, lastPost = null) => {
  const body = {};
  if (idUser) body["idUser"] = idUser;
  if (lastPost) body["idPost"] = lastPost;

  try {
    const data = await axios.put(API.base + API.getHomePosts, body);
    return data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};

export const getProfilePosts = async (idUser = null, lastPost = null) => {
  const body = {};
  if (idUser) body["id"] = idUser;
  if (lastPost) body["idPost"] = lastPost;

  try {
    const data = await axios.put(API.base + API.getProfilePosts, body);
    return data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};

export const getComments = async (comment) => {
  try {
    const data = await axios.put(API.base + API.getComments, { comment: [comment] });
    return data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};
