import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Africaform() {

  const today = new Date().toISOString().split("T")[0];

  let todata = useNavigate();
  let [insertfrom, setinsertform] = useState({ price: 10000 });

  function instdetail(e) {
    const { name, value } = e.target;
    setinsertform({ ...insertfrom, [name]: value });
  }

  function detailsubmit(e) {
    e.preventDefault();
    if (!insertfrom.name || !insertfrom.contact || !insertfrom.age || !insertfrom.day || !insertfrom.date || !insertfrom.person || !insertfrom.mode || !insertfrom.country) {
      alert("Please fill in all fields.");
      return;
    }
    const formData = { ...insertfrom, price: 10000 };
    axios.post('http://localhost:3000/tourism', formData)
      .then(res => {
        alert("Data Inserted");
        todata('/Singledetail');
      })
      .catch(err => {
        alert("Error inserting data. Please try again.");
        console.error(err);
      });
  }

  return (
    <>
      <div className="asiadiv">
        <section id="asiaSec">
          <h1 className="asiaFormHead">Book Your Africa Tour</h1>
          <form className="asiaForm" onSubmit={detailsubmit}>
            <div className="inputGroup">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Full Name" onChange={instdetail} autoFocus />
            </div>

            <div className="inputGroup">
              <label htmlFor="contact">Contact</label>
              <input type="number" id="contact" name="contact" placeholder="Enter Number" onChange={instdetail} />
            </div>

            <div className="inputGroup">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" name="age" placeholder="Your Age" onChange={instdetail} />
            </div>

            <div className="inputGroup">
              <label htmlFor="day">Number of Days</label>
              <input type="number" id="day" name="day" placeholder="Trip Duration" onChange={instdetail} />
            </div>

            <div className="inputGroup">
              <label htmlFor="date">Start Date</label>
              <input type="date" id="date" name="date" onChange={instdetail}  min={today} />
            </div>

            <div className="inputGroup">
              <label htmlFor="person">Number of Persons</label>
              <input type="number" id="person" name="person" placeholder="Travelers Count" onChange={instdetail} />
            </div>

            <div className="inputGroup">
              <label htmlFor="price">Estimated Price</label>
              <input type="number" id="price" name="price" value={insertfrom.price} readOnly />
            </div>

            <div className="inputGroup">
              <label htmlFor="mode">Mode of Travel</label>
              <select name="mode" id="mode" onChange={instdetail}>
                <option value="">Select Vehicle</option>
                <option value="Train">Train</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
              </select>
            </div>

            <div className="inputGroup">
              <label htmlFor="country">Destination Country</label>
              <select name="country" id="country" onChange={instdetail}>
                <option value="">Select Destination</option>
                <option value="Africa - South Africa">Africa - South Africa</option>
                <option value="Africa - Algeria">Africa - Algeria</option>
                <option value="Africa - Ethiopia">Africa - Ethiopia</option>
                <option value="Africa - Uganda">Africa - Uganda</option>
                <option value="Africa - Eritrea">Africa - Eritrea</option>
                <option value="Africa - Botswana">Africa - Botswana</option>
                <option value="Africa - Egypt">Africa - Egypt</option>
                <option value="Africa - Namibia">Africa - Namibia</option>
                <option value="Africa - Lesotho">Africa - Lesotho</option>
                <option value="Africa - Kenya">Africa - Kenya</option>
              </select>
            </div>

            <div className="submitBtn">
              <button type="submit">Book Now</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Africaform;
