import axios from "axios";
import API from "./constants";

export const getUser = async (id, idUser ) => {
  try {
    const data = await axios.put(API.base + API.getUser, {id, idUser});
    return data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};

export const getArtistList = async (id, idUser = null, idArtist = null) => {
  try {
    const data = await axios.put(API.base + API.getArtistList, {
      idUser,
      idArtist,
    });
    return data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};

export const getFollowers = async (id, idUser = null, idFollow = null) => {
  const body = { id };
  if (idUser) body["idUser"] = idUser;
  if (idFollow) body["idFollow"] = idFollow;

  try {
    const data = await axios.put(API.base + API.getFollowers, body);
    return data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};

export const getFollowed = async (id, idUser = null, idFollow = null) => {
  const body = { id };
  if (idUser) body["idUser"] = idUser;
  if (idFollow) body["idFollow"] = idFollow;

  try {
    const data = await axios.put(API.base + API.getFollowed, body);
    return data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};

export const follow = async (idFollower, idFollowed) => {

  try {
    const data = await axios.post(API.base + API.follow, {
      idFollower,
      idFollowed,
    });
    return data.data;
  } catch ({ response: { data, status } }) {
    throw Error(`Error ${status} - ${data.error}`);
  }
};
