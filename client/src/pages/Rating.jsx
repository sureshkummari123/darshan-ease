import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

function Rating() {
  const navigate = useNavigate();

  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("⭐ Thank you for your feedback!");

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1 className="title">⭐ Rate Your Experience</h1>

          <form onSubmit={handleSubmit}>

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>

            <br /><br />

            <textarea
              rows="5"
              placeholder="Write your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />

            <br /><br />

            <button type="submit">
              Submit Feedback
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default Rating;