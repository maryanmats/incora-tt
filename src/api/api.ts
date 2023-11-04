import axios from "axios";
import { Feed } from "../types/Feed";

export const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const methods = {
  get: async (endpoint: string) => {
    const response = await client.get(endpoint);
    return response.data;
  },
  post: async (endpoint: string, body: Feed) => {
    const response = await client.post(endpoint, body);
    return response.data;
  },
  delete: async (endpoint: string) => {
    return await client.delete(endpoint);
  },
};
