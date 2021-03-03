import Axios from "axios";

const sercureaxios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
sercureaxios.interceptors.request.use((config) => {
  config.headers["Autorization"] = "token";
  return config;
});
sercureaxios.interceptors.response.use(
  (respose) => {
    console.log("server call is sucess");
    return respose;
  },
  (error) => {
    console.log("server call error");
    return "errorred";
  }
);
export default sercureaxios;
