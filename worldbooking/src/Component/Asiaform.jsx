import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Asiaform() {
  let todata = useNavigate();
  let [insertfrom, setinsertform] = useState({ price: 9000 });

  function instdetail(e) {
    const { name, value } = e.target;
    setinsertform({ ...insertfrom, [name]: value });
  }

  function detailsubmit(e) {
    e.preventDefault();
    // Basic form validation
    if (!insertfrom.name || !insertfrom.contact || !insertfrom.age || !insertfrom.day || !insertfrom.date || !insertfrom.person || !insertfrom.mode || !insertfrom.country) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = { ...insertfrom, price: 9000 };
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
    <div className="asiadiv">
      <section id="asiaSec">
        <h1 className="asiaFormHead">Book Your Asia Tour</h1>

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
            <input type="date" id="date" name="date" onChange={instdetail} />
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
              <option value="Asia - India">Asia - India</option>
              <option value="Asia - China">Asia - China</option>
              <option value="Asia - Iraq">Asia - Iraq</option>
              <option value="Asia - Sri Lanka">Asia - Sri Lanka</option>
              <option value="Asia - Georgia">Asia - Georgia</option>
              <option value="Asia - Cyprus">Asia - Cyprus</option>
              <option value="Asia - Thailand">Asia - Thailand</option>
              <option value="Asia - Brunie">Asia - Brunie</option>
              <option value="Asia - Turkey">Asia - Turkey</option>
              <option value="Asia - Nepal">Asia - Nepal</option>
            </select>
          </div>

          <div className="submitBtn">
            <button type="submit">Book Now</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Asiaform;
