import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    axios
      .post("http://localhost:8082/signup", { name, email, password }) 
      .then((res) => {
        setMessage("Sign-up successful! You can now log in.");
        console.log(res.data);
      })
      .catch((err) => {
        setMessage(
          err.response && err.response.data.error
            ? err.response.data.error
            : "Sign-up failed. Please try again."
        );
        console.error("Error during sign-up:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-info">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" className="form-control"  value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {message && <div className="mt-3 alert alert-info">{message}</div>}
      </div>
    </div>
  );
}
export default SignUp;
