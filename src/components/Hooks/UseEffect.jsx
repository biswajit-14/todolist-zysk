import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  useEffect(() => {
    console.log("effect render");
  }, [countOne]);
  return (
    <div>
      <span>{countOne}</span>
      <button onClick={() => setCountOne(countOne + 1)}>CoutnOne</button>
      <span>{countTwo}</span>
      <button onClick={() => setCountTwo(countTwo + 1)}>CoutnTwo</button>
      <span>{countThree}</span>
      <button onClick={() => setCountThree(countThree + 1)}>CountThree</button>
    </div>
  );
};

export default UseEffect;
