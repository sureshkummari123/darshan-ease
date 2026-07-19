import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

function ViewBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card" style={{ width: "90%", maxWidth: "1000px" }}>

          <h1 className="title">📋 View Bookings</h1>

          {bookings.length === 0 ? (
            <h3>No Bookings Found</h3>
          ) : (
            <table className="booking-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Persons</th>
                  <th>Date</th>
                  <th>Time Slot</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{booking.name}</td>
                    <td>{booking.mobile}</td>
                    <td>{booking.email}</td>
                    <td>{booking.persons}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>
      </div>
    </>
  );
}

export default ViewBookings;