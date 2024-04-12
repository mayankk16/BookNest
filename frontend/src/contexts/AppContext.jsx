import React, { createContext, useContext } from 'react';
import { useQuery } from "react-query";

const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const showToast = (toastMessage) => {
    console.log(toastMessage);
  };

  return (
    <AppContext.Provider value={{ showToast }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export { AppContextProvider, useAppContext };
