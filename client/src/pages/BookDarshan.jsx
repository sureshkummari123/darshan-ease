import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

function BookDarshan() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    temple: "",
    name: "",
    mobile: "",
    email: "",
    persons: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save booking temporarily
    localStorage.setItem("booking", JSON.stringify(formData));

    // Go to Payment page
    navigate("/payment");
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1 className="title">🛕 Book Darshan</h1>

          <form onSubmit={handleSubmit}>

            <select
              name="temple"
              value={formData.temple}
              onChange={handleChange}
              required
            >
              <option value="">Select Temple</option>
              <option>Tirumala Tirupati Devasthanam</option>
              <option>Srisailam Temple</option>
              <option>Kanaka Durga Temple</option>
              <option>Simhachalam Temple</option>
              <option>Annavaram Satyanarayana Temple</option>
            </select>

            <br /><br />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <br /><br />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <br /><br />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <br /><br />

            <input
              type="number"
              name="persons"
              placeholder="Number of Persons"
              value={formData.persons}
              onChange={handleChange}
              required
            />

            <br /><br />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <br /><br />

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select Time Slot</option>
              <option>6:00 AM - 7:00 AM</option>
              <option>7:00 AM - 8:00 AM</option>
              <option>8:00 AM - 9:00 AM</option>
              <option>9:00 AM - 10:00 AM</option>
              <option>10:00 AM - 11:00 AM</option>
            </select>

            <br /><br />

            <button type="submit">
              Continue to Payment →
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default BookDarshan;