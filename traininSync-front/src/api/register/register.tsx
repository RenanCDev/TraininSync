import { api } from "../../services/api";

interface RegisterSchema {
  username: string;
  password: string;
  email: string;
}

export const registerUser = async (registerBody: RegisterSchema) => {
  try {
    const response = await api.post("/register/", registerBody);
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error;
  }
};
