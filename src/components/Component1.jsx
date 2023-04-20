import React, { useContext } from "react";
// import Component2 from './Component2'
import userData from "../App";

const Component1 = () => {
  
  const data = useContext(userData);
  console.log(userData);
  console.log(data);

  return <div>{/* <Component2 /> */}</div>;
};

export default Component1;
