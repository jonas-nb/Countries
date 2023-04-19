import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { My_Context } from '../Context';
import { BsArrowLeftShort } from 'react-icons/bs';
import './btn.css';

const Page = () => {
  let { slug } = useParams();
  const { api, stateDarkMode } = useContext(My_Context);
  const getData = api.filter(({ alpha3Code }) => slug === alpha3Code);

  const data = getData[0];

  //Filtra a api em busca das fronteiras, caso não exista a fronteira retorna no borders
  const borderCountries = data.borders
    ? api.filter((country) => data.borders.includes(country.alpha3Code))
    : 'No borders';

  //vai seperar as linguagem faladas no pais
  const languages = data.languages.map(({ name }, index, array) => {
    const isLast = index === array.length - 1;
    const separator = isLast ? ' ' : ',';
    return `${name}${separator} `;
  });

  return (
    <div
      className={`${
        stateDarkMode === true ? 'bg-[#1d2d38] text-white' : 'bg-white'
      } w-full h-full`}
    >
      <div className="pt-10 pl-5">
        <Link
          className={`${
            stateDarkMode === true
              ? 'bg-[#1d2d38] text-white'
              : 'bg-white text-black'
          } btn rounded-sm normal-case flex justify-around w-36 myShadow border-none`}
          to={'/'}
        >
          <div>
            <BsArrowLeftShort className="text-4xl" />
          </div>
          <div>Back</div>
        </Link>
      </div>
      <div className="lg:w-full lg:h-screen lg:flex lg:flex-row">
        <img
          className="m-auto w-11/12 lg:w-[27rem] mt-16 lg:pt-0 lg:pr-0 flagShadow"
          src={data.flags.svg}
          alt="Flag of country"
        />
        <div className="w-11/12 m-auto mt-10 font-thin tracking-wider  lg:h-96 lg:w-7/12 lg:pt-10">
          <div className="lg:flex lg:w-10/12 lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl">
                {data.name ? data.name : 'Not Found'}
              </h1>
              <p className="mt-5">
                <span>Native Name:</span>{' '}
                {data.nativeName ? data.nativeName : 'Not Found'}
              </p>
              <p>
                <span>Population:</span>{' '}
                {data.population
                  ? data.population.toLocaleString()
                  : 'Not Found'}
              </p>
              <p>
                <span>Region:</span> {data.region ? data.region : 'Not Found'}
              </p>
              <p>
                <span>Sub Region:</span>{' '}
                {data.subregion ? data.subregion : 'Not Found'}
              </p>
              <p>
                <span>Capital:</span>{' '}
                {data.capital ? data.capital : 'Not Found'}
              </p>
            </div>
            <div className="pt-5">
              <p>
                <span>Top Level Domain:</span>{' '}
                {data.topLevelDomain ? data.topLevelDomain : 'Not Found'}
              </p>
              <p>
                <span>Currencies:</span>{' '}
                {data.currencies ? data.currencies[0].name : 'Not Found'}
              </p>
              <p>
                <span>Languages:</span> {languages ? languages : ' Not Found'}
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-xl mt-10 lg:mt-0 lg:pt-10">
              Border Countries:
            </h1>
            <div className="flex justify-center lg:justify-start place-content-start gap-5 flex-wrap flex-row p-2 drop-shadow-lg">
              {data.borders ? (
                borderCountries.map((country) => (
                  <p
                    className={`${
                      stateDarkMode === true ? 'bg-[#1c2a34]' : 'bg-white'
                    } p-2  MyBtn font-thin drop-shadow-lg w-56`}
                    key={country.alpha3Code}
                  >
                    {country.name}
                  </p>
                ))
              ) : (
                <p>No borders found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
