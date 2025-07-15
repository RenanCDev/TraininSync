import { api } from "../../services/api";

interface LoginSchema {
  username: string;
  password: string;
}

export const loginUser = async (loginBody: LoginSchema) => {
  try {
    const response = await api.post("/login/", loginBody);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
