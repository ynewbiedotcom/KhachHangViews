import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [userData, setUserData] = useState({ bg: "dark", color: "light" });
  const changeTheme = () => {
    userData.bg === "light"
      ? setUserData({ bg: "dark", color: "light" })
      : setUserData({ bg: "light", color: "dark" });
    console.log(userData);
  };
  return (
    <AppContext.Provider value={{ userData, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
}
export { AppContext, AppProvider };
