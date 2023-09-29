import React, { createContext, useContext, useState } from 'react';

const ValueContext = createContext();

export const useValue = () => {
  return useContext(ValueContext);
};

export const ValueProvider = ({ children }) => {
  const [value, setValue] = useState('');

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <ValueContext.Provider value={{ value, updateValue }}>
      {children}
    </ValueContext.Provider>
  );
};