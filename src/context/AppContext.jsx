import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const AppContext = createContext();

// Crear el proveedor (Provider) para el contexto
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Ejemplo de estado global, como un usuario autenticado

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useAppContext = () => useContext(AppContext);
