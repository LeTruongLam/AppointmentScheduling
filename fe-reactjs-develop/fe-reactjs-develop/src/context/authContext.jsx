import { createContext, useEffect, useState } from "react";
import { RoleEnum } from "../utils/Enum";
export const AuthContext = createContext();
export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    user: null,
    role: RoleEnum.PROVIDER,
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
