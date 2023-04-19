import React, { useContext } from 'react';
import { My_Context } from '../Context';
import './style.css';
const Card = (props) => {
  let { stateDarkMode } = useContext(My_Context);

  return (
    <div
      className={`${
        stateDarkMode ? 'bg-[#1c2a34]' : 'bg-white'
      } w-64 h-[28rem] m-auto myShadowCard`}
    >
      <div className="m-auto">
        <img
          className="h-full object-cover m-auto"
          src={props.flag}
          alt={props.title}
        />
      </div>
      <div className="p-5 mt-5 font-extralight">
        <h1 className="text-lg font-bold">{props.title}</h1>
        <div
          className={`${
            stateDarkMode === true ? 'text-white' : 'text-black'
          } mt-5`}
        >
          <p>
            <span className="">Population: </span>
            {props.population.toLocaleString()}
          </p>
          <p>
            <span className="">Region: </span>
            {props.region === ' ' ? 'does not exist' : props.region}
          </p>

          <p>
            <span className="">Capital: </span>
            {props.capital === undefined
              ? 'The country does not have an officially designated capital'
              : props.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
