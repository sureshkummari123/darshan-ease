import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import hero from "../assets/hero.png";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div
        className="home"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="overlay">

          <div className="card">

            <h1 className="title">🛕 Darshan Ease</h1>

            <p className="subtitle">
              Temple Darshan Booking System
            </p>

            <button onClick={() => navigate("/admin-login")}>
              🔐 Admin Login
            </button>

            <button onClick={() => navigate("/book-darshan")}>
              🎟️ Book Darshan
            </button>

            <button onClick={() => navigate("/view-bookings")}>
              📋 View Bookings
            </button>

            <hr style={{ margin: "20px 0" }} />

            <p className="footer">
              <b>Developed By</b><br />
              Kummari Suresh<br />
              GIET Engineering College
            </p>

          </div>

        </div>
      </div>
    </>
  );
}

export default Home;