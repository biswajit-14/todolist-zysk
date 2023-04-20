import React, { useState } from "react";
// import style from "./loginpage.module.css";

const Login = ({ onClicked }) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (name !== "Biswajit Swain") {
      alert("Incorrect Username");
      return false;
    }
    if (password !== "Biswa@444") {
      alert("Enter Correct password");
      return false;
    }
    onClicked();
    setName("");
    setPassword("");
  };

  return (
    <form onSubmit={handleLogin}>
      <section className="main">
        <div className="login">
          <label>Username: </label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br /><br />
          <label>Password: </label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <button className="btn">Login</button>
        </div>
      </section>
    </form>
  );
};

export default Login;
