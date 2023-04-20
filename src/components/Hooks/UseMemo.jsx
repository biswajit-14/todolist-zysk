import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const EO = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <div>
      <h1>
        {countOne} - {EO ? "Even" : "Odd"}
      </h1>
      <button onClick={() => setCountOne(countOne + 1)}>One</button>
      <h1>{countTwo}</h1>
      <button onClick={() => setCountTwo(countTwo + 1)}>Two</button>
    </div>
  );
};

export default UseMemo;
