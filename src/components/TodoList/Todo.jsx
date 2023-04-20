import React, { useEffect, useState } from "react";

function getTodoItem() {
  const list = localStorage.getItem("todoItems");
  if (list) {
    return JSON.parse(localStorage.getItem("todoItems"));
  } else {
    return [];
  }
}

const Todo = ({ onClicking, setTodoId, date, time }) => {
  const [inputValue, setInputValue] = useState(getTodoItem());
  const [dropdown, setDropDown] = useState("all");
  const [filterValue, setFilterValue] = useState(inputValue);

  const handleDropDown = (e) => {
    const dropdownValue = e.target.value;
    setDropDown(dropdownValue);

    if (dropdownValue === "complete") {
      const completeValue = inputValue.filter(
        (item) => item.status === "complete"
      );
      setFilterValue([...completeValue]);
    } else if (dropdownValue === "incomplete") {
      const inCompleteValue = inputValue.filter(
        (item) => item.status === "incomplete"
      );
      setFilterValue([...inCompleteValue]);
    } else {
      setFilterValue([...inputValue]);
    }
  };
  const handlecheckBox = (id) => {
    const box = document.getElementsByClassName("checkBox")[id];
    if (box.checked) {
      if (inputValue[id].status === "incomplete") {
        setInputValue([...inputValue], (inputValue[id].status = "complete"));
      }
    } else if (!box.checked) {
      if (inputValue[id].status === "complete") {
        setInputValue([...inputValue], (inputValue[id].status = "incomplete"));
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(inputValue));
  }, [inputValue]);

  const deleteTodoItem = (id) => {
    setInputValue(inputValue.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    onClicking();
    setTodoId(id);
  };

  function renderDropdown(arrayType) {
    return (
      <div className="p-4">
        {arrayType.map((item, index) => {
          return (
            <div
              className="max-w-3xl mx-auto p-4 mb-4 bg-slate-300 rounded-xl h-20 flex justify-between items-center"
              key={item.id}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-6 w-6 checkBox"
                  defaultChecked={item.status === "complete" ? true : false}
                  onClick={() => handlecheckBox(index)}
                />
                <p
                  className="paragraph inline-block text-xl"
                  style={{
                    textDecoration:
                      item.status === "complete" ? "line-through" : "",
                  }}
                >
                  {item.title}
                </p>
                <small>
                  {" "}
                  {time}, {date}
                </small>
              </div>
              <div>
                <i
                  className="fa-solid fa-trash inline-block h-6 w-6"
                  title="Delete"
                  onClick={() => deleteTodoItem(item.id)}
                ></i>
                <i
                  className="fa-solid fa-pen-to-square"
                  title="Edit"
                  onClick={() => handleEdit(item.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <p className="text-center my-8 text-4xl font-bold text-slate-400">
        TODO LIST
      </p>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between mt-14">
          <button
            className="add-btn rounded-md bg-blue-500 text-white font-semibold h-10 w-28"
            onClick={onClicking}
          >
            Add Task
          </button>
          <select
            className="bg-slate-300 rounded-md w-36 h-10 p-2"
            value={dropdown}
            onChange={handleDropDown}
          >
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        {/* (<div className="bg-slate-300 rounded-xl h-20 mt-10 text-center">
          <p className="bg-slate-200 inline-block rounded-md p-2 mt-4">
            No Todos
          </p>
        </div>) */}
        {dropdown === "complete" || "incomplete"
          ? renderDropdown(filterValue)
          : renderDropdown(inputValue)}
      </div>
    </>
  );
};

export default Todo;
