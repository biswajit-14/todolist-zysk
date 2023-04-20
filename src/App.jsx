import React, { useState } from "react";
import Todo from "./components/TodoList/Todo";
import TodoList from "./components/TodoList/TodoList";
// import UseReducer from "./components/Hooks/UseReducer";
// import Component1 from "./components/Component1";
// import UseRef from "./components/Hooks/UseRef";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Loginpage/Login";
// import Homepage from "./components/Loginpage/Homepage";
// import Home from "./components/Loginpage/Home";
// import About from "./components/Loginpage/About";
// import UseState from "./components/Hooks/UseState";
// export const userData = createContext();
// import UseMemo from "./components/Hooks/UseMemo";
// import UseCallBack from "./components/Hooks/UseCallBack";

// import "../src/scss/main.css";

const App = () => {

  // const [click, setClick] = useState(true);

  // const handleClick = () => {
  //   setClick(false);
  // };

  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yy = today.getFullYear();
  const date = `${dd}/${mm}/${yy}`;

  const hours = addZero(today.getHours());
  const minutes = addZero(today.getMinutes());

  const current_time = `${hours}:${minutes}`;

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }


  const [todoId, setTodoId] = useState(0)
  const [modal, setModal] = useState(true);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="max-w-5xl mx-auto">
      {/* <Router>
        {click ? <Login onClicked={handleClick} /> : <Homepage />}
        <Routes>
          {click ? null : <Route path="/" element={<Home />} />}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}

      <Todo
        onClicking={handleModal}
        setTodoId={setTodoId}
        date={date}
        time={current_time}
      />
      {modal ? null : <TodoList onClicked={handleModal} todoId = {todoId} emptyTodoId={setTodoId} />}
      {/* <TodoList /> */}
      {/* <Todo /> */}

      {/*  */}
      {/* <UseState /> */}
      {/* <UseRef /> */}

      {/* <userData.Provider value="Biswajit">
        <Component1 />
      </userData.Provider> */}

      {/* <UseEffect /> */}
      {/* <UseReducer /> */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
    </div>
  );
};

export default App;
