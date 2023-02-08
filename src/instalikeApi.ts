import axios from "axios";
import { createInstalikeApi } from "@jmetterrothan/instalike";

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

const instalikeApi = createInstalikeApi(
  axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json",
    },
  })
);

instalikeApi.driver.interceptors.request.use((config) => {
  const accessToken = window.localStorage.getItem(ACCESS_TOKEN_KEY);

  if (accessToken !== null) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  return config;
});


export const hasAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN_KEY) !== null;

export default instalikeApi;