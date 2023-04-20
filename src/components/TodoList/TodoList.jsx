import React, { useState, useEffect } from "react";

function getTodoItem() {
  const list = localStorage.getItem("todoItems");
  if (list) {
    return JSON.parse(localStorage.getItem("todoItems"));
  } else {
    return [];
  }
}

const TodoList = ({ onClicked, todoId, emptyTodoId }) => {
  const [title, setTitle] = useState("");
  const [inputValue, setInputValue] = useState(getTodoItem());
  const [optionValue, setOptionValue] = useState("incomplete");

  const findValue = inputValue.find((item) => todoId === item.id);
  const getInputValue = (e) => {
    setTitle(e.target.value);
  };

  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };

  const handleTodoItem = () => {
    if (!title) {
      alert("add a title");
    } else if (todoId === 0) {
      const allInputValue = {
        title: title,
        status: optionValue,
        id: new Date().getTime().toString(),
      };
      setInputValue([allInputValue, ...inputValue]);
    } else {
      const newEditedValue = inputValue.map((item) => {
        if (item.id === findValue.id) {
          item.status = optionValue;
          item.title = title;
          item.id = findValue.id;
        }
        return item;
      });
      setInputValue(newEditedValue);
    }
  };

  const handleCancel = () => {
    onClicked();
    emptyTodoId(0);
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(inputValue));
  }, [inputValue]);

  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-slate-200 w-1/3 h-72 p-4 rounded-md">
          <h3 className="font-semibold text-lg">Add TODO</h3>
          <div className="mt-4">
            <div>
              <label className="text-md">Title</label>
              <br />
              <input
                type="text"
                defaultValue={todoId !== 0 ? findValue.title : ""}
                className="w-full h-10 rounded-sm text-lg"
                onChange={getInputValue}
              />
            </div>
            <div className="mt-4">
              <label className="text-md">Status</label>
              <br />
              <select
                className="w-full h-10 rounded-sm text-lg"
                defaultValue={todoId !== 0 ? findValue.status : optionValue}
                onChange={handleSelect}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleTodoItem}
              className="rounded-md bg-blue-500 text-white font-semibold h-10 w-28 mr-2"
            >
              Add Task
            </button>
            <button
              className="add-btn rounded-md bg-slate-300 text-white font-semibold h-10 w-28"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
