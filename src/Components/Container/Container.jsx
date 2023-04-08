import React, { useContext, useState } from "react";
import { My_Context } from "../Context";
import { FiMoon, FiSun, FiSearch } from "react-icons/fi";

const Container = () => {
  const { setDarkMode, stateDarkMode, api, selectedRegion, setSelectedRegion } =
    useContext(My_Context);

  //script para o select region
  const [regions, setRegions] = useState(
    api
      .map((item) => item.region)
      .filter((value, index, self) => self.indexOf(value) === index)
  );

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };
  console.log(selectedRegion);
  return (
    <div>
      <div className="w-full h-24 flex justify-around items-center shadow-md border">
        <h1 className="text-sm font-semibold">Where in the World?</h1>
        <button
          className="flex items-center justify-between w-36"
          onClick={setDarkMode}
        >
          <div>{stateDarkMode === false ? <FiMoon /> : <FiSun />}</div>
          <p>Dark Mode</p>
        </button>
      </div>
      <div
        className="relative left-3 mt-5 flex items-center w-11/12 bg-white drop-shadow-md  border border-[#eae9e9] py-2 pr-10 pl-4
      rounded-md text-gray-800  focus:outline-none
      focus:border-blue-500 "
      >
        <FiSearch />
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full outline-none ml-5"
        />
      </div>
      <div>
        <select
          className="relative left-3 mt-5 flex items-center w-8/12 h-16 bg-white drop-shadow-md  border border-[#eae9e9] py-2 pr-10 pl-4
        rounded-md text-gray-800  focus:outline-none
        "
          id="region-select"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Selecione uma região</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Container;
