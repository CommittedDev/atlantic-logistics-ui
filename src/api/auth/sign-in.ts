import { SignInData } from "@/interface/auth/sign-in";
import apiClient from "../api-client";

export const signIn = async (data: SignInData) => {
  try {
    return Promise.resolve(await apiClient.post("https://dummyjson.com/auth/login", data));
  } catch (error) {
    return Promise.reject(error);
  }
};
