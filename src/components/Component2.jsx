import React, { useContext } from "react";
import userData from "../App";

const Component2 = () => {
  const gotData = useContext(userData);
  console.log(gotData);
  return <div>Component two</div>;
};

export default Component2;
