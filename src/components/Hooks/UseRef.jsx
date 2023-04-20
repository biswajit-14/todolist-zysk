import React, { useRef } from "react";

const UseRef = () => {
  const count = useRef(0);
  console.log(count);
  const handleRef = () => {
    count.current = count.current + 1;
    alert(`you clicked ${count.current} times.`)
  };
  return (
    <div>
      <button onClick={handleRef}>You clicked {count.current} times.</button>
    </div>
  );
};

export default UseRef;
