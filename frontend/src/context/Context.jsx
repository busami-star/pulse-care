// contexts/AppContext.js
import { createContext } from "react";
import { doctors } from "../assets/assets"; // Import doctors data

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctors,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
