import { createContext, ReactNode, useEffect, useState } from "react";
import { Usuario } from "../models/Usuario"; // Adaptado ao seu modelo
import { login } from "../services/Services";
import { toastAlert } from "@/utils/toastAlert";

interface AuthContextProps {
  usuario: Usuario; // Modelo do usuário ajustado
  authenticated: boolean;
  handleLogout(): void;
  handleLogin(
    usuario: Omit<
      Usuario,
      | "id"
      | "ativo"
      | "livrosPublicados"
      | "seguindo"
      | "seguidores"
      | "comentarios"
      | "avaliacoes"
      | "curtidas"
      | "livrosLidos"
    >
  ): Promise<void>;
  isLoading: boolean;
  atualizarUsuario: (
    nome: string,
    username: string,
    foto: string,
    email?: string,
    biografia?: string
  ) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    username: "",
    email: "",
    senha: "",
    ativo: false,
    token: "",
    foto: "",
    biografia: "",
    livrosPublicados: [],
    comentarios: [],
    avaliacoes: [],
    curtidas: [],
    livrosLidos: [],
    seguindo: [],
    seguidores: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const authenticated = !!usuario.token;

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUsuario = localStorage.getItem("authUsuario");

    if (token && storedUsuario) {
      setUsuario({
        ...JSON.parse(storedUsuario),
        token: JSON.parse(token),
      });
    }
  }, []);

  async function handleLogin(
    userLogin: Omit<
      Usuario,
      | "id"
      | "ativo"
      | "livrosPublicados"
      | "seguindo"
      | "seguidores"
      | "comentarios"
      | "avaliacoes"
      | "curtidas"
      | "livrosLidos"
    >
  ) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, userLogin, setUsuario);
      localStorage.setItem("authToken", JSON.stringify(usuario.token));
      localStorage.setItem("authUsuario", JSON.stringify(usuario));
      toastAlert("Usuário logado com sucesso", "sucesso");
    } catch (error) {
      console.error(error);
      toastAlert("Dados do usuário inconsistentes", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      username: "",
      email: "",
      senha: "",
      ativo: false,
      token: "",
      foto: "",
      biografia: "",
      livrosPublicados: [],
      comentarios: [],
      avaliacoes: [],
      curtidas: [],
      livrosLidos: [],
      seguindo: [],
      seguidores: [],
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUsuario");
  }

  function atualizarUsuario(
    nome: string,
    username: string,
    foto: string,
    email?: string,
    biografia?: string
  ) {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      nome,
      username,
      foto,
      email: email || prevUsuario.email,
      biografia: biografia || prevUsuario.biografia,
    }));
    localStorage.setItem("authUsuario", JSON.stringify(usuario));
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        authenticated,
        handleLogin,
        handleLogout,
        isLoading,
        atualizarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
