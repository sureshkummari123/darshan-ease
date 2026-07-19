import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

function Payment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const booking = JSON.parse(localStorage.getItem("booking"));

  const handlePayment = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      const data = await response.json();

      alert("✅ Payment Successful!\n\n" + data.message);

      localStorage.removeItem("booking");

      navigate("/rating`");
    } catch (error) {
      alert("❌ Payment Failed or Server Not Connected!");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">

          <h1 className="title">💳 Payment Gateway</h1>

          <h3>Select Payment Method</h3>

          <br />

          <button onClick={handlePayment} disabled={loading}>
            💰 UPI Payment
          </button>

          <button onClick={handlePayment} disabled={loading}>
            💳 Debit / Credit Card
          </button>

          <button onClick={handlePayment} disabled={loading}>
            🏦 Net Banking
          </button>

          <button onClick={handlePayment} disabled={loading}>
            💵 Cash at Temple
          </button>

          <br /><br />

          <p>
            <b>Temple:</b> {booking?.temple}
          </p>

          <p>
            <b>Name:</b> {booking?.name}
          </p>

          <p>
            <b>Date:</b> {booking?.date}
          </p>

          <p>
            <b>Time:</b> {booking?.time}
          </p>

        </div>
      </div>
    </>
  );
}

export default Payment;