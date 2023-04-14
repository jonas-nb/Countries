import React, { useContext, useState } from "react";
import { My_Context } from "../Context";
import { FiSearch } from "react-icons/fi";
import Card from "../Country-Change/Card";
import { Link } from "react-router-dom";

const Container = () => {
  const { stateDarkMode, api, selectedRegion, setSelectedRegion } =
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
  console.log(stateDarkMode);
  return (
    <div
      className={`${
        stateDarkMode === true ? "bg-[#15242b] text-white" : "bg-white"
      } border-t border-[#15242b] h-full`}
    >
      <div
        className={`${
          stateDarkMode === true ? "bg-[#1c2b35]" : "bg-white"
        } relative left-3 mt-5 flex items-center w-11/12 drop-shadow-md py-2 pr-10 pl-4
        rounded-md text-gray-800  focus:outline-none
        focus:border-blue-500 `}
      >
        <FiSearch
          className={`${
            stateDarkMode === true ? "text-white" : "text-[#0d1114]"
          }`}
        />
        <input
          type="text"
          placeholder="Search for a country..."
          className={`${
            stateDarkMode === true ? "bg-[#1c2a34] text-white" : "bg-white"
          } w-full outline-none ml-5`}
        />
      </div>
      <div>
        <select
          className={`${
            stateDarkMode === true ? "bg-[#1d2d38] text-white" : "bg-white"
          } relative left-3 mt-5 flex items-center w-8/12 h-16 drop-shadow-md py-2 pr-10 pl-4
          rounded-md text-gray-800  focus:outline-none`}
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
      <div className="flex flex-col mt-10 gap-10">
        {api
          .filter(
            ({ region }) => !selectedRegion || region === selectedRegion // filtra por região selecionada
          )
          .map(({ name, flags, population, region, capital }) => (
            <Link
              to={`/${name}`}
              key={name}
              className={`${
                stateDarkMode === true ? "text-white" : "text-black"
              }`}
            >
              <Card
                title={name}
                flag={flags.png}
                population={population}
                region={region}
                capital={capital}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Container;
