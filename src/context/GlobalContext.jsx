import { createContext, useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env;
export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch(`${VITE_API_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <GlobalContext.Provider value={{ task, setTask }}>
      {children}
    </GlobalContext.Provider>
  );
}
