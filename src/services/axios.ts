import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "http://13.232.38.217:9002";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
  accept: "*/*",
};

export function fetchData(params: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    axios
      .request(params)
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error: AxiosError) => reject(error));
  });
}
