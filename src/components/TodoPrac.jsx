import React, { useEffect, useState } from "react";

function getTodoItem() {
  const list = localStorage.getItem("todoItems");
  if (list) {
    return JSON.parse(localStorage.getItem("todoItems"));
  } else {
    return [];
  }
}

const TodoPrac = () => {

  const [title, setTitle] = useState("");
  const [inputValue, setInputValue] = useState(getTodoItem());
  const [optionValue, setOptionValue] = useState();
  const [check, setCheck] = useState();

  const handleTodoItem = () => {
    if (title.length > 0) {
      setInputValue([...inputValue, title]);
      setTitle("");
    } else {
      alert("Add Title");
    }
  };

  const getInputValue = (e) => {
    setTitle(e.target.value);
  };

  const handleCheck = (e) => {
    const checkBox = document.getElementById("check");
    if (e.target.checked) {
      checkBox.style.textDecoration = "line-Through";
      checkBox.classList.add("complete");
      checkBox.classList.remove("inComplete");
    } else {
      checkBox.style.textDecoration = "none";
      checkBox.classList.remove("complete");
      checkBox.classList.add("inComplete");
    }
  };

  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };

  const deleteTodoItem = (id) => {
    setInputValue(inputValue.filter((item, index) => index !== id));
  };

  const editTodoItem = (item) => {
    setTitle(item);
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(inputValue));
  }, [inputValue]);

  return (
    <>
      <div className="bg-slate-200 w-1/2 h-72 p-4 rounded-md">
        <label>Title</label>
        <br />
        <input type="text" value={title} onChange={getInputValue} />
        <br />
        <select value={optionValue} onChange={handleSelect}>
          <option value="in-comp">Incomplete</option>
          <option value="comp">complete</option>
        </select>
        <br />
        <button onClick={handleTodoItem}>Add Task</button>
        <button>Cancel</button>
      </div>
      <div className="showItems">
        {inputValue.map((item, index) => {
          return (
            <div
              className="eachItem bg-slate-300 rounded-xl h-20 mt-4 text-center"
              key={index}
            >
              <input type="checkbox" value={check} onClick={handleCheck} />
              <p style={{ display: "inline-block" }} id="check">
                {item}
              </p>
              <i
                className="fa-solid fa-trash"
                onClick={() => deleteTodoItem(index)}
              ></i>
              <i
                className="fa-solid fa-pen"
                onClick={() => editTodoItem(item)}
              ></i>
              <small>Time</small>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoPrac;
