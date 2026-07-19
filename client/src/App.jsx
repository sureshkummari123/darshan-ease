import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import BookDarshan from "./pages/BookDarshan";
import Payment from "./pages/Payment";
import ViewBookings from "./pages/ViewBookings";
import Rating from"./pages/Rating";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/book-darshan" element={<BookDarshan />} />

      <Route path="/payment" element={<Payment />} />

      <Route path="/view-bookings" element={<ViewBookings />} />
   
   <Route path="/rating" elements={<Rating/>}/>
   
    </Routes>
  );
}

export default App;