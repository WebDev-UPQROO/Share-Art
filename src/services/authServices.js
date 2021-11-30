import axios from "axios";
import API from "./constants";

export const login = async (formData) => {
  try {
    const data = await axios.put(API.base + API.login, formData);
    return data;
  } catch ({ response: { data, status } }) {
    switch (status) {
      case 403:
        throw Error(`Usuario o contraseña incorrectos`);
      case 500:
        throw Error(`Error en el servidor, intentalo mas tarde`);
      default:
        throw Error(`Error ${status} - ${data.error}`);
    }
  }
};

export const changeImage = async (formData) => {
  try {
    const data = await axios.put(API.base + API.changeProfile, formData);
    return data;
  } catch ({ response: { data, status } }) {
    switch (status) {
      default:
        throw Error(`Error ${status} - ${data.error}`);
    }
  }
};

export const changeCover = async (formData) => {
  try {
    const data = await axios.put(API.base + API.changeCover, formData);
    return data;
  } catch ({ response: { data, status } }) {
    switch (status) {
      default:
        throw Error(`Error ${status} - ${data.error}`);
    }
  }
};
