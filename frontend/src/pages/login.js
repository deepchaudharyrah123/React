import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8082/login", { email, password })
      .then((res) => {
        setMessage("Login successful!");
        console.log(res.data);
      })
      .catch((err) => {
        setMessage(
          err.response && err.response.data.error
            ? err.response.data.error
            : "Login failed. Please try again."
        );
        console.error("Error during login:", err);
      });
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-info">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input  type="email" id="email" placeholder="Enter email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
        {message && <div className="mt-3 alert alert-info">{message}</div>}
      </div>
    </div>
  );
}
export default Login;
