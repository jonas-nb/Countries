import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Components/Container/Container";
import Page from "./Components/Country-Page/Page";
import { My_Context } from "./Components/Context";
import { FiMoon, FiSun } from "react-icons/fi";

const App = () => {
  const { stateDarkMode, setDarkMode } = useContext(My_Context);

  return (
    <div>
      <div
        className={`${
          stateDarkMode === true ? "bg-[#1c2a34] text-white" : "bg-white"
        } w-full h-24 flex justify-around items-center shadow-md `}
      >
        <h1 className="text-sm font-semibold">Where in the World?</h1>
        <button
          className="flex items-center justify-between w-36 bg-transparent outline-none focus:border-none focus:outline-none cursor-pointer "
          onClick={setDarkMode}
        >
          <div>{stateDarkMode === false ? <FiMoon /> : <FiSun />}</div>
          <p>Dark Mode</p>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/:slug" element={<Page />} />
      </Routes>
    </div>
  );
};

export default App;
