import React, { createContext, useState } from "react";
import data from "../data.json";

export const My_Context = createContext();

export const My_Provider = ({ children }) => {
  let [stateDarkMode, setStateDarkMode] = useState(false);
  let [selectedRegion, setSelectedRegion] = useState("");
  //muda o estado para modo noturno
  const setDarkMode = () => setStateDarkMode(!stateDarkMode);
  const api = data;
  return (
    <My_Context.Provider
      value={{
        setDarkMode,
        stateDarkMode,
        api,
        selectedRegion,
        setSelectedRegion,
      }}
    >
      {children}
    </My_Context.Provider>
  );
};
