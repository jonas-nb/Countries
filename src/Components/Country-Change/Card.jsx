import React, { useContext } from "react";
import { My_Context } from "../Context";

const Card = (props) => {
  let { stateDarkMode } = useContext(My_Context);
  console.log(props.capital);
  return (
    <div
      className={`${
        stateDarkMode ? "bg-[#1c2a34]" : "bg-white"
      } m-auto flex items-center card w-10/12 drop-shadow-md `}
    >
      <div>
        <img src={props.flag} alt={props.title} />
      </div>
      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>
        <div className={stateDarkMode === true ? "text-white" : "text-black"}>
          <p>
            <span className="font-semibold">Population: </span>
            {props.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {props.region === " " ? "does not exist" : props.region}
          </p>

          <p>
            <span className="font-semibold">Capital: </span>
            {props.capital === undefined
              ? "The country does not have an officially designated capital"
              : props.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
