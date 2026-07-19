import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      alert("✅ Login Successful!");
      navigate("/view-bookings");
    } else {
      alert("❌ Invalid Username or Password");
    }
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1 className="title">🔐 Admin Login</h1>

          <form onSubmit={handleLogin}>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <br /><br />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <br /><br />

            <button type="submit">
              Login
            </button>

          </form>

          <hr style={{ margin: "20px 0" }} />

          <p>
            <b>Demo Credentials</b><br />
            Username: <b>admin</b><br />
            Password: <b>admin123</b>
          </p>

        </div>
      </div>
    </>
  );
}

export default AdminLogin;