import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@yourFood:user", JSON.stringify(user));
      localStorage.setItem("@yourFood:token", JSON.stringify(token));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@yourFood:user");
    localStorage.removeItem("@yourFood:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@yourFood:token");
    const user = localStorage.getItem("@yourFood:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };