import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🛕 <span>Darshan Ease</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/book-darshan">Book Darshan</Link>
        <Link to="/view-bookings">View Bookings</Link>
        <Link to="/admin-login">Admin Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;