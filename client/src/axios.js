import axios from "axios";

const URL = "http://localhost:4200/api";

/**
 * @description Helper function to create an axios instance request
 * @param {string} url
 * @returns {Promise}
 * @example makeRequest.get("/")
 */
export const makeRequest = axios.create({
  baseURL: URL,
  withCredentials: true,
});
