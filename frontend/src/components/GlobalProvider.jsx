import React, { useContext, createContext, useReducer } from "react";
import useGlobalReducer from "hooks/useGlobalReducer";

const GlobalContext = createContext();

const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }

  return context;
};

const GlobalProvider = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(useGlobalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, useGlobalContext };