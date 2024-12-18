import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    setIsLoading(true);
    setErrors(null);

    const response = await fetch(`http://neoncoder.com:3000/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setErrors(json.errors);
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("blogUser", JSON.stringify(json));

      // update auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading, errors };
};

