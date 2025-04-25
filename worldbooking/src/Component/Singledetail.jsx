import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Singledetail() {
  const tohome = useNavigate();

  const [formdetail, setformdetail] = useState([]);
  const [alertShown, setAlertShown] = useState(false);
  const [alertRefundShown, setAlertRefundShown] = useState(false);
  const [showform, setshowform] = useState(false);
  const [editdetail, seteditdetail] = useState({});
  const [paymentMode, setPaymentMode] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/tourism")
      .then(res => setformdetail(res.data));
  }, []);

  function editdata(e) {
    const { name, value } = e.target;
    seteditdetail({ ...editdetail, [name]: value });
  }

  function handlePaymentModeChange(e) {
    setPaymentMode(e.target.value);  // Update payment mode selection
  }

  function editfinaldata(e) {
    e.preventDefault();

    const updatedData = {
      ...editdetail,
      isPaid: false, // Reset to unpaid until booking is confirmed
      paymentMode: paymentMode,  // Add the selected payment mode here
    };

    axios.put(`http://localhost:3000/tourism/${editdetail.id}`, updatedData)
      .then(() => {
        alert("Data Updated");
        setshowform(false);
        axios.get("http://localhost:3000/tourism")
          .then(res => setformdetail(res.data));
      });
  }

  function confirmBooking() {
    const lastBooking = formdetail[formdetail.length - 1];
    const total = lastBooking ? lastBooking.price * lastBooking.day * lastBooking.person : 0;

    if (!paymentMode) {
      alert("Please select a payment method before confirming the booking.");
      return; // Prevent booking confirmation if payment mode is not selected
    }

    const confirmed = window.confirm("Do you want to confirm your booking?");

    if (confirmed) {
      if (!alertShown) {
        alert(`✅ Booking Confirmed\n💸 Amount Paid: $${total}`);
        setAlertShown(true);

        // Update booking as paid and set payment method
        const updatedBooking = {
          ...lastBooking,
          isPaid: true,
          paymentMode: paymentMode  // Store the selected payment mode in the booking
        };

        axios.put(`http://localhost:3000/tourism/${lastBooking.id}`, updatedBooking)
          .then(() => {
            axios.get("http://localhost:3000/tourism")
              .then(res => setformdetail(res.data));
          });
      }
    }
  }

  const last = formdetail[formdetail.length - 1];

  return (
    <section id="singledata">
      <h1 className="singlehead">Your Booking Details</h1>

      <button className="singletohome">
        <Link to="/" style={{ textDecoration: "none", color: "darkblue", fontWeight: "600" }}>
          To Home Section
        </Link>
      </button>

      <table border="1" className="singledetailtable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Day</th>
            <th>Date</th>
            <th>Person</th>
            <th>Vehicle</th>
            <th>Total</th>
            <th>Destination</th>
            <th>Payment Mode</th>
            <th>Confirm</th>
            <th>Edit</th>
            <th>Cancel</th>
          </tr>
        </thead>

        <tbody>
          {last && (
            <tr key={last.id}>
              <td>{last.name}</td>
              <td>{last.contact}</td>
              <td>{last.age}</td>
              <td>{last.day}</td>
              <td>{last.date}</td>
              <td>{last.person}</td>
              <td>{last.mode}</td>
              <td>{last.price * last.day * last.person}</td>
              <td>{last.country}</td>
              <td>
               
                {!last.isPaid && (
                  <div>
                    <label className="formcontlab"></label>
                    <select value={paymentMode} onChange={handlePaymentModeChange} className="formcontinp">
                      <option value="">Select Payment Method</option>
                      <option value="Online">Online</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="UPI">UPI</option>
                    </select>
                  </div>
                )}
              </td>
              <td>
                <button onClick={confirmBooking} disabled={last.isPaid}>Confirm Booking</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    seteditdetail(last);
                    setshowform(true);
                  }}
                  disabled={last.isPaid}
                  style={{
                    backgroundColor: last.isPaid ? "#ccc" : "#007bff",
                    color: last.isPaid ? "#666" : "#fff",
                    cursor: last.isPaid ? "not-allowed" : "pointer"
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => delet(last.id)}
                  className="delbutton"
                  disabled={!last.isPaid}
                >
                  Cancel
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showform && (
        <form onSubmit={editfinaldata}>
          <div className="formcontainer">
            <label className="formcontlab">Enter Name</label>
            <input type="text" name="name" value={editdetail.name} onChange={editdata} className="formcontinp" />

            <label className="formcontlab">Enter Contact</label>
            <input type="text" name="contact" value={editdetail.contact} onChange={editdata} className="formcontinp" />
          </div><br />

          <div>
            <label className="formcontlab">Enter Age</label>
            <input type="number" name="age" value={editdetail.age} onChange={editdata} className="formcontinp" />

            <label className="formcontlab">Enter Day</label>
            <input type="number" name="day" value={editdetail.day} onChange={editdata} className="formcontinp" />
          </div><br />

          <div>
            <label className="formcontlab">Enter Date</label>
            <input type="date" name="date" value={editdetail.date} onChange={editdata} className="formcontinp" />

            <label className="formcontlab">Enter Person's</label>
            <input type="number" name="person" value={editdetail.person} onChange={editdata} className="formcontinp" />
          </div><br />

          <div>
            <label className="formcontlab">Mode Of Travel</label>
            <select name="mode" value={editdetail.mode} onChange={editdata} className="formcontinp">
              <option value="Select Vehicle">Select Vehicle</option>
              <option value="Train">Train</option>
              <option value="Car">Car</option>
              <option value="Bus">Bus</option>
            </select>
          </div><br />

          <div>
            <label className="formcontlab">Payment Mode</label>
            <select name="paymentMode" value={editdetail.paymentMode || ""} onChange={editdata} className="formcontinp">
              <option value="">Select Payment Method</option>
              <option value="Online">Online</option>
              <option value="Credit Card">Credit Card</option>
              <option value="UPI">UPI</option>
            </select>
          </div><br />

          <div>
            <input type="submit" className="singlesubmit" />
          </div>
        </form>
      )}
    </section>
  );
}

export default Singledetail;
