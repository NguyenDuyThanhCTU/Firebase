import { createContext, useRef, useState } from "react";

export const AppContext = createContext();

const AppProviders = ({ children }) => {
  const [id, setId] = useState("");

  const Home = useRef();
  const Lite = useRef();
  return (
    <AppContext.Provider value={(id, setId, Home, Lite)}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProviders;
