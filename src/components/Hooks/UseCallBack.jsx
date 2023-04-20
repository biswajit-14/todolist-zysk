import React, { useState } from "react";
import Button from "../Button";
import Count from "../Count";

const UseCallBack = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(20000);

  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <center>
      <Count text="Age" count={age} />
      <Button onClick={() => incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button onClick={() => incrementSalary}>Increment Salary</Button>
    </center>
  );
};

export default UseCallBack;
