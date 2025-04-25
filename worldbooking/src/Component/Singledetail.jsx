import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Singledetail() {
  let tohome = useNavigate();

  const [formdetail, setformdetail] = useState([]);
  const [alertShown, setAlertShown] = useState(false);
  const [alertRefundShown, setAlertRefundShown] = useState(false);
  const [showform, setshowform] = useState(false);
  const [editdetail, seteditdetail] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/tourism").then((res) => {
      setformdetail(res.data);
      const last = res.data[res.data.length - 1];
      if (last?.paymentMethod) {
        setPaymentMethod(last.paymentMethod);
        setAlertShown(true);
      }
    });
  }, []);

  function editdata(e) {
    const { name, value } = e.target;
    seteditdetail({ ...editdetail, [name]: value });

    if (name === "paymentMethod") {
      setPaymentMethod(value);
    }
  }

  function editfinaldata(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/tourism/${editdetail.id}`, editdetail)
      .then(() => {
        alert("Data Updated");
        setshowform(false);
        axios.get("http://localhost:3000/tourism").then((res) => {
          setformdetail(res.data);
        });
      });
  }

  function confirmBooking() {
    if (!paymentMethod) {
      alert("Please select a payment method before confirming.");
      return;
    }

    const lastBooking = formdetail[formdetail.length - 1];
    const total = lastBooking.price * lastBooking.day * lastBooking.person;

    const confirmed = window.confirm(`Confirm booking using ${paymentMethod}?`);

    if (confirmed) {
      axios
        .put(`http://localhost:3000/tourism/${lastBooking.id}`, {
          ...lastBooking,
          paymentMethod: paymentMethod,
        })
        .then(() => {
          alert(
            `✅ Booking Confirmed\n💸 Paid: $${total}\n🧾 Method: ${paymentMethod}`
          );
          setAlertShown(true);
        });
    }
  }

  function delet(id) {
    const lastBooking = formdetail[formdetail.length - 1];
    const total = lastBooking.price * lastBooking.day * lastBooking.person;

    const confirmed = window.confirm(
      "Are you sure you want to cancel the booking?"
    );

    if (confirmed) {
      axios
        .delete(`http://localhost:3000/tourism/${id}`)
        .then(() => {
          if (!alertRefundShown) {
            alert(`❌ Booking Cancelled\n💸 Money Refunded: $${total}`);
            setAlertRefundShown(true);
          }
          tohome("/");

          axios.get("http://localhost:3000/tourism").then((res) => {
            setformdetail(res.data);
          });
        })
        .catch((error) =>
          alert("Error canceling the booking: " + error.message)
        );
    }
  }

  return (
    <section id="singledata">
      <h1 className="singlehead">Your Booking Details</h1>

      <button className="singletohome">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "darkblue",
            fontWeight: "600",
          }}
        >
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
            <th>Payment</th>
            <th>Confirm</th>
            <th>Edit</th>
            <th>Cancel</th>
          </tr>
        </thead>

        <tbody>
          {formdetail.length > 0 && (
            <tr key={formdetail[formdetail.length - 1].id}>
              <td>{formdetail[formdetail.length - 1].name}</td>
              <td>{formdetail[formdetail.length - 1].contact}</td>
              <td>{formdetail[formdetail.length - 1].age}</td>
              <td>{formdetail[formdetail.length - 1].day}</td>
              <td>{formdetail[formdetail.length - 1].date}</td>
              <td>{formdetail[formdetail.length - 1].person}</td>
              <td>{formdetail[formdetail.length - 1].mode}</td>
              <td>
                {formdetail[formdetail.length - 1].price *
                  formdetail[formdetail.length - 1].day *
                  formdetail[formdetail.length - 1].person}
              </td>
              <td>{formdetail[formdetail.length - 1].country}</td>
              <td>
                {!alertShown ? (
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="UPI">UPI</option>
                    <option value="Online">Online</option>
                  </select>
                ) : (
                  <span>{paymentMethod}</span>
                )}
              </td>
              <td>
                <button onClick={confirmBooking} disabled={alertShown}>
                  Confirm Booking
                </button>
              </td>
              <td>
              <td>
               <button
                 onClick={() => {
                   seteditdetail(formdetail[formdetail.length - 1]);
                   setshowform(true);
                 }}
                 disabled={alertShown} 
                 style={{
                   backgroundColor: alertShown ? "#ccc" : "#007bff",
                   color: alertShown ? "#666" : "#fff",
                   cursor: alertShown ? "not-allowed" : "pointer",
                 }}>
                    
                 Edit
                </button>
                </td>

              </td>
              <td>
                <button
                  onClick={() =>
                    delet(formdetail[formdetail.length - 1].id)
                  }
                  className="delbutton"
                  disabled={!alertShown}
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
            <label className="formcontlab"> Enter Name</label>
            <input
              type="text"
              name="name"
              value={editdetail.name}
              onChange={editdata}
              placeholder="Enter Your Name"
              className="formcontinp"
              disabled={alertShown}
            />

            <label className="formcontlab"> Enter Contact </label>
            <input
              type="text"
              name="contact"
              value={editdetail.contact}
              onChange={editdata}
              placeholder="Enter Contact Number"
              className="formcontinp"
              disabled={alertShown}
            />
          </div>
          <br />

          <div>
            <label className="formcontlab"> Enter Age</label>
            <input
              type="number"
              name="age"
              value={editdetail.age}
              onChange={editdata}
              placeholder="Enter Your Age"
              className="formcontinp"
              disabled={alertShown}
            />

            <label className="formcontlab"> Enter Day</label>
            <input
              type="number"
              name="day"
              value={editdetail.day}
              onChange={editdata}
              placeholder="Number Of Day's"
              className="formcontinp"
              disabled={alertShown}
            />
          </div>
          <br />

          <div>
            <label className="formcontlab"> Enter Date</label>
            <input
              type="date"
              name="date"
              value={editdetail.date}
              onChange={editdata}
              placeholder="Enter Date"
              className="formcontinp"
              disabled={alertShown}
            />

            <label className="formcontlab"> Enter Person's</label>
            <input
              type="number"
              name="person"
              value={editdetail.person}
              onChange={editdata}
              placeholder="Number Of Person's"
              className="formcontinp"
              disabled={alertShown}
            />
          </div>
          <br />

          <div>
            <label className="formcontlab"> Mode Of Travel</label>
            <select
              name="mode"
              value={editdetail.mode}
              onChange={editdata}
              className="formcontinp"
              disabled={alertShown}
            >
              <option value="Select Vehicle">Select Vehicle</option>
              <option value="Train">Train</option>
              <option value="Car">Car</option>
              <option value="Bus">Bus</option>
            </select>
          </div>
          <br />

          <div>
            <label className="formcontlab"> Payment Method</label>
            <select
              name="paymentMethod"
              value={editdetail.paymentMethod || ""}
              onChange={editdata}
              className="formcontinp"
              disabled={alertShown}
            >
              <option value="">Select</option>
              <option value="Credit Card">Credit Card</option>
              <option value="UPI">UPI</option>
              <option value="Online">Online</option>
            </select>
          </div>
          <br />

          <div>
            <input
              type="submit"
              className="singlesubmit"
              disabled={alertShown}
            />
          </div>
        </form>
      )}
    </section>
  );
}

export default Singledetail;
