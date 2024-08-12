import axios from "axios";

const apiUrl = process.env.REACT_APP_BASE_URL;
const key = process.env.REACT_APP_API_KEY;

export const getNewsList = async () => {
  try {
    const data = await axios.get(`${apiUrl}&apiKey=${key}`);
    return data;
  } catch (err) {
    console.log("Error:", err);
  }
};

export const getCategoryList = async (category) => {
  try {
    const data = await axios.get(
      `${apiUrl}&category=${category.toLowerCase()}&apiKey=${key}`
    );
    return data;
  } catch (err) {
    console.log("Error:", err);
  }
};

export const getKeywordFilter = async (keyword) => {
  try {
    const data = await axios.get(`${apiUrl}&q=${keyword}&apiKey=${key}`);
    return data;
  } catch (err) {
    console.log("Error:", err);
  }
};

export const getSourceFilter = async (source) => {
  try {
    const data = await axios.get(`${apiUrl}&sources=${source}&apiKey=${key}`);
    return data;
  } catch (err) {
    console.log("Error:", err);
  }
};

export const getDateFilter = async (date) => {
  try {
    const data = await axios.get(`${apiUrl}&from=${date}&apiKey=${key}`);
    return data;
  } catch (err) {
    console.log("Error:", err);
  }
};
