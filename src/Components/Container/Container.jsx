import React, { useContext, useState } from 'react';
import { My_Context } from '../Context';
import { FiSearch } from 'react-icons/fi';
import Card from '../Country-Change/Card';
import { Link } from 'react-router-dom';

const Container = () => {
  const { stateDarkMode, api, selectedRegion, setSelectedRegion } =
    useContext(My_Context);

  //script para o select region
  const [regions, setRegions] = useState(
    api
      .map((item) => item.region)
      .filter((value, index, self) => self.indexOf(value) === index)
  );

  //estado para armazenar o valor da caixa de pesquisa
  const [searchValue, setSearchValue] = useState('');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  //filtro atualizado para levar em consideração o valor da caixa de pesquisa
  const filteredCountries = api
    .filter(({ region }) => !selectedRegion || region === selectedRegion)
    .filter(({ name }) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <div
      className={`${
        stateDarkMode === true
          ? 'bg-[#15242b] border-[#15242b] text-white'
          : 'bg-white border-none'
      } border-t  h-full pb-5`}
    >
      <div className="lg:flex lg:w-10/12 lg:m-auto justify-between">
        <div
          className={`${
            stateDarkMode === true ? 'bg-[#1c2a34]' : 'bg-white'
          } relative left-3 mt-5 flex items-center lg:justify-around w-11/12 lg:w-96 drop-shadow-md py-2 pr-10 pl-4
        rounded-md text-gray-800  focus:outline-none
        focus:border-blue-500 `}
        >
          <FiSearch
            className={`${
              stateDarkMode === true ? 'text-white' : 'text-[#0d1114]'
            }`}
          />
          <input
            id="procura"
            type="text"
            placeholder="Search for a country..."
            className={`${
              stateDarkMode === true ? 'bg-[#1c2a34] text-white' : 'bg-white'
            } w-full outline-none ml-5`}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        <div>
          <select
            className={`${
              stateDarkMode === true ? 'bg-[#1d2d38] text-white' : 'bg-white'
            } relative left-3 lg:left-0 mt-5 flex items-center w-8/12 lg:w-80 h-16 drop-shadow-md py-2 pr-10 pl-4
          rounded-md text-gray-800  focus:outline-none`}
            id="region-select"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="">Filter by Region</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10">
        {/* retorna um filtro para escolha de continentes, sendo que quando selectRegion não tiver o valor, mostra tudo */}
        {api
          .filter(
            ({ region, name }) =>
              (!selectedRegion || region === selectedRegion) && // filtra por região selecionada
              (!searchValue ||
                name.toLowerCase().includes(searchValue.toLowerCase())) // filtra por pesquisa
          )
          .map(({ name, flags, population, region, capital, alpha3Code }) => (
            <Link
              to={`/${alpha3Code}`}
              key={name}
              className={`${
                stateDarkMode === true ? 'text-white' : 'text-black'
              } cursor-pointer`}
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
