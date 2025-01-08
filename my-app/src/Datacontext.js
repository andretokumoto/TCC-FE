import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <DataContext.Provider value={{ formData, setFormData }}>
      {children}
    </DataContext.Provider>
  );
};
