import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { My_Context } from "../Context";
const Page = () => {
  let { slug } = useParams();
  const { api } = useContext(My_Context);

  const infoPageApi = api.filter(({ name }) => slug === name);

  console.log(infoPageApi);
  return (
    <div>
      <button></button>
      <div>
        <h1></h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <h1></h1>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
