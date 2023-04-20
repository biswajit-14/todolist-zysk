import React, { Fragment, useState } from "react";
import { itemList } from "./StateData";

const UseState = () => {
  const [index, setIndex] = useState(0);

  const handleIndex = () => {
    setIndex(index + 1);
  };

  const itemData = itemList[index];

  return (
    <div>
      {/* {itemData.map((item, index) => {
        return (
          <Fragment key={index}>
            <h2>{item.name}</h2>
            <img src={item.url} alt={item.alt} />
            <p>
              ({index + 1} of {itemData.length})
            </p>
            <p>{item.description}</p>
          </Fragment>
        );
      })} */}

      <button onClick={handleIndex}>Next</button>
      <h2>{itemData.name}</h2>
      <img src={itemData.url} alt={itemData.alt} height={100} width={100} />
      <p>
        ({index + 1} of {itemList.length})
      </p>
      <p>{itemData.description}</p>
    </div>
  );
};

export default UseState;
