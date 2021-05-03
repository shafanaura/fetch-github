import { default as axios } from "axios";
const { REACT_APP_API_URL: API_URL } = process.env;

const http = () => {
  return axios.create({
    baseURL: API_URL,
  });
};

export default http;
