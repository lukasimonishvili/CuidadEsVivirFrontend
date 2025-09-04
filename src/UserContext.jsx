import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); 
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    childName: "",
    childAge: "",
    disabilityPercent: "",
  });

  return (
    <UserContext.Provider value={{ userRole, setUserRole, userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

