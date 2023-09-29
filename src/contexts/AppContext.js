import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [value, setValue] = useState('');

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <AppContext.Provider value={{ value, updateValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
