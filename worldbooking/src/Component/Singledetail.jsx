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

  // Fetch booking details on component mount
  useEffect(() => {
    axios.get('http://localhost:3000/tourism')
      .then(res => setformdetail(res.data));
  }, []);

  // Handle editing form data
  function editdata(e) {
    const { name, value } = e.target;
    seteditdetail({ ...editdetail, [name]: value });
  }

  // Submit the edited data
  function editfinaldata(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/tourism/${editdetail.id}`, editdetail)
      .then(() => {
        alert("Data Updated");
        setshowform(false); // Hide the form after update
      });
  }

  // Handle booking confirmation
  function confirmBooking() {
    const lastBooking = formdetail[formdetail.length - 1];
    const total = lastBooking ? lastBooking.price * lastBooking.day * lastBooking.person : 0;

    const confirmed = window.confirm("Do you want to confirm your booking?");

    if (confirmed) {
      if (!alertShown) {
        alert(`✅ Booking Confirmed\n💸 Amount Paid: $${total}`);
        setAlertShown(true);
      }
    }
  }

  // Handle cancellation (refund)
  function delet(id) {
    const lastBooking = formdetail[formdetail.length - 1];
    const total = lastBooking ? lastBooking.price * lastBooking.day * lastBooking.person : 0;

    const confirmed = window.confirm("Are you sure you want to cancel the booking?");

    if (confirmed) {
      axios.delete(`http://localhost:3000/tourism/${id}`)
        .then(() => {
          if (!alertRefundShown) {
            alert(`❌ Booking Cancelled\n💸 Money Refunded: $${total}`);
            setAlertRefundShown(true);
          }
          tohome("/"); // Navigate to home after deletion
          // Optionally, refetch the data after cancellation
          axios.get('http://localhost:3000/tourism')
            .then(res => setformdetail(res.data));
        })
        .catch(error => alert("Error canceling the booking: " + error));
    }
  }

  return (
    <section id="singledata">
      <h1 className="singlehead">Your Booking Details</h1>

      <button className="singletohome">
        <Link to="/" style={{ textDecoration: "none", color: "darkblue", fontWeight: "600" }}>To Home Section</Link>
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
              <td>{formdetail[formdetail.length - 1].price * formdetail[formdetail.length - 1].day * formdetail[formdetail.length - 1].person}</td>
              <td>{formdetail[formdetail.length - 1].country}</td>
              <td>
                <button onClick={confirmBooking} >Confirm Booking</button>
              </td>
              <td>
                <button onClick={() => {
                  seteditdetail(formdetail[formdetail.length - 1]);
                  setshowform(true); // Make sure form becomes visible after setting data
                }}>Edit</button>
              </td>
              <td>
                <button onClick={() => delet(formdetail[formdetail.length - 1].id)} className="delbutton"   disabled={!alertShown}
                        >Cancel</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showform && (
      
          <form onSubmit={editfinaldata}>
            <div className="formcontainer">
              <label htmlFor="" className="formcontlab"> Enter Name</label>
              <input type="text" name="name" value={editdetail.name} onChange={editdata} placeholder="Enter Your Name" className="formcontinp"/>

              <label htmlFor="" className="formcontlab"> Enter Contact </label>
              <input type="text" name="contact" value={editdetail.contact} onChange={editdata} placeholder="Enter Contact Number"  className="formcontinp"/>
            </div> <br />

            <div>
              <label htmlFor="" className="formcontlab"> Enter Age</label>
              <input type="number" name="age" value={editdetail.age} onChange={editdata} placeholder="Enter Your Age" className="formcontinp"/>

              <label htmlFor="" className="formcontlab"> Enter Day</label>
              <input type="number" name="day" value={editdetail.day} onChange={editdata} placeholder="Number Of Day's" className="formcontinp"/>
            </div> <br />

            <div>
              <label htmlFor="" className="formcontlab"> Enter Date</label>
              <input type="date" name="date" value={editdetail.date} onChange={editdata} placeholder="Enter Date" className="formcontinp"/>

              <label htmlFor="" className="formcontlab"> Enter Person's</label>
              <input type="number" name="person" value={editdetail.person} onChange={editdata} placeholder="Number Of Person's" className="formcontinp" />
            </div> <br />

            <div>
              <label htmlFor="" className="formcontlab"> Mode Of Travel</label>
              <select name="mode" value={editdetail.mode} onChange={editdata} className="formcontinp">
                <option value="Select Vehicle">Select Vehicle</option>
                <option value="Train">Train</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
              </select>
            </div> <br />

            <div>
              <input type="submit" className="singlesubmit" />
            </div>
          </form>
        
      )}
    </section>
  );
}

export default Singledetail;
