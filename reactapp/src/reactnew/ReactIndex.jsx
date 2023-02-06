import React, { Fragment, useState } from "react";

const Reactindex = () => {
  const [color, setColor] = useState("");
  const handlerFunction = () => {
    setColor("blue");
  
  }; 
  const handlerFunction23 =() =>{
    setColor("red");
  }
  return (
    <Fragment>
      <div>
        <p>React test tag</p>
        <h1>I like{color}</h1>
        <button type="button" onClick={handlerFunction}>
          Click me
        </button>
        <button type="button" onClick={handlerFunction23}>
          Click me 2
        </button>
      
      </div>
    </Fragment>
  );
};
export default Reactindex;
