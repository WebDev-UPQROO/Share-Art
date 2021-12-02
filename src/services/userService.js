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

export const getArtistList = async () => {
  try {
    const data = await axios.put(API.base + API.getArtistList);
    return data;
  } catch ({response: {data, status}}) {
      throw(Error(`Error ${status} - ${data.error}`));
  }
};

export const getFollowers = async (idUser = null, lastArtist = null) => {
  const body = {};
  if (idUser) body["idUser"] = idUser;
  if (lastArtist) body["id"] = lastArtist;

  try {
    const data = await axios.put(API.base + API.getFollowers, body);
    return data;
  } catch ({response: {data, status}}) {
      throw(Error(`Error ${status} - ${data.error}`));
  }
};

export const getFollowed = async (idUser = null, lastArtist = null) => {
  const body = {};
  if (idUser) body["idUser"] = idUser;
  if (lastArtist) body["id"] = lastArtist;

  try {
    const data = await axios.put(API.base + API.getFollowed, body);
    return data;
  } catch ({response: {data, status}}) {
      throw(Error(`Error ${status} - ${data.error}`));
  }
};
