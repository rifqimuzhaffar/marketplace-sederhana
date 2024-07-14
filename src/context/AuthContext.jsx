import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("userId");
    if (token) {
      const role = localStorage.getItem("role");
      setIsAuthenticated(true);
      setUserRole(role);
      setUserId(id);
    }
  }, []);

  const login = (role, id) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setUserId(id);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", id);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole("");
    setUserId(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userRole, userId, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
