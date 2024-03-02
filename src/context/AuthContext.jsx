import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
export const AuthenticateContext = createContext();

const AuthContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    const userId = localStorage.getItem("user_id");

    try {
      if (isLoggedIn) {
        fetch(`https://server.ultrapureengineering.com/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setUser(data);
            setIsLoggedIn(true);
            setLoading(false);
          });
      }
    } catch (error) {
      console.log(error);
    }

    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, [token]);

  const signInUser = async (email, password) => {
    try {
      const response = await fetch(
        "https://server.ultrapureengineering.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.status === 200) {
        const { token, _id } = await response.json();
        localStorage.setItem("access_token", token);
        localStorage.setItem("user_id", _id);
        setToken(token);
        setIsLoggedIn(true);
        setLoading(false);
      } else if (response.status === 401) {
        const { message } = await response.json();
        throw new Error(message);
      } else {
        throw new Error("An error occurred while logging in");
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    setToken(null);
    setIsLoggedIn(false);
    setUser(null);
    setLoading(false);
    fetch("https://server.ultrapureengineering.com/api/logout", {
      method: "POST",
    });
  };

  const authInfo = {
    user,
    isLoggedIn,
    signInUser,
    logout,
    loading,
    setIsLoggedIn,
    setLoading,
  };
  return (
    <AuthenticateContext.Provider value={authInfo}>
      {children}
    </AuthenticateContext.Provider>
  );
};

export default AuthContext;
