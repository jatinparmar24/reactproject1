import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Asiaform() {

  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();
  const [insertform, setInsertform] = useState({
    name: "",
    contact: "",
    age: "",
    day: "",
    date: "",
    person: "",
    mode: "",
    country: "",
    price: 9000,
  });

  // Load user data from localStorage on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userdata"));
    if (user) {
      setInsertform((prev) => ({
        ...prev,
        name: user.name || "",
        contact: user.contact || "", // optional, if stored
      }));
    }
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInsertform({ ...insertform, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const requiredFields = ["name", "contact", "age", "day", "date", "person", "mode", "country"];
    const isEmpty = requiredFields.some(field => !insertform[field]);

    if (isEmpty) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = { ...insertform, price: 9000 };
    console.log("Submitting form:", formData);

    // axios.post("http://localhost:3000/tourism", formData)
    axios.post("http://127.0.0.1:8000/registrations/", formData)
    .then(() => {
      alert("Data Inserted");
      navigate("/Singledetail");
      })
      .catch((err) => {
      alert("Error inserting data. Please try again.");
      console.error("Submission error:", err);
     });

  }

  return (
    <div className="asiadiv">
      <section id="asiaSec">
        <h1 className="asiaFormHead">Book Your Asia Tour</h1>

        <form className="asiaForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              onChange={handleInputChange}
              value={insertform.name}
              autoFocus
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="contact">Contact</label>
            <input
              type="number"
              id="contact"
              name="contact"
              placeholder="Enter Number"
              onChange={handleInputChange}
              value={insertform.contact}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Your Age"
              onChange={handleInputChange}
              value={insertform.age}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="day">Number of Days</label>
            <input
              type="number"
              id="day"
              name="day"
              placeholder="Trip Duration"
              onChange={handleInputChange}
              value={insertform.day}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="date">Start Date</label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={handleInputChange}
              value={insertform.date}
              min={today}

            />
          </div>

          <div className="inputGroup">
            <label htmlFor="person">Number of Persons</label>
            <input
              type="number"
              id="person"
              name="person"
              placeholder="Travelers Count"
              onChange={handleInputChange}
              value={insertform.person}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="price">Estimated Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={insertform.price}
              readOnly
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="mode">Mode of Travel</label>
            <select
              name="mode"
              id="mode"
              onChange={handleInputChange}
              value={insertform.mode}
            >
              <option value="">Select Vehicle</option>
              <option value="Train">Train</option>
              <option value="Car">Car</option>
              <option value="Bus">Bus</option>
            </select>
          </div>

          <div className="inputGroup">
            <label htmlFor="country">Destination Country</label>
            <select
              name="country"
              id="country"
              onChange={handleInputChange}
              value={insertform.country}
            >
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
