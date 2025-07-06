import { createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvier = ({ children }) => {
  const user = "sabbir";
  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvier;
