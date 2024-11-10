import { createContext, useState } from "react";

const AppContext = createContext(null);

const AppStoreProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppStoreProvider };
