import axios from "axios";

const Api = axios.create({
  baseURL: "https://json-server-ecompany.herokuapp.com/",
});
export default Api;
