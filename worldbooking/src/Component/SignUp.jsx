import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  let tologin = useNavigate();

  let [signdata, setsigndata] = useState({
    name: "",
    age: "",
    contact: "",
    email: "",
    password: "",
  });

  function inpsign(e) {
    const { name, value } = e.target;
    setsigndata({ ...signdata, [name]: value });
  }

  function signsubmit(e) {
    e.preventDefault();

    // Validate Age
    if (signdata.age < 10 || signdata.age > 100) {
      alert("Age must be between 10 and 100.");
      return;
    }

    if (!signdata.email.includes("@gmail")) {
      alert("Email must be a Gmail address.");
      return;
    }


   
 
  const contact = signdata.contact;
  const contactPattern = /^[1-9][0-9]{9}$/;

  if (!contactPattern.test(contact)) {
    alert("Contact number must be 10 digits and not start with 0.");
    return;
  }
 
  if (/^(\d)\1{9}$/.test(contact)) {
    alert("Contact number cannot have all digits the same (e.g. 1111111111, 9999999999).");
    return;
  }

 
    const nameR = /^[A-Za-z\s]+$/;
    if (!nameR.test(signdata.name)) {
      alert("Name should not contain numbers or symbols.");
      return;
    }

    localStorage.setItem("userdetails", JSON.stringify(signdata));
    tologin("/Login");
  }

  return (
    <>
      <section id="signuppage">
        <h1 className="signhead">Sign Up Form</h1>
        <div className="signcenter">
          <form onSubmit={signsubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={inpsign}
              placeholder="Enter your full name"
              required
            />

            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              onChange={inpsign}
              placeholder="Enter your age"
              required
            />

            <label htmlFor="contact">Contact Number</label>
            <input
              type="tel"
              name="contact"
              onChange={inpsign}
              placeholder="Enter your contact number"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={inpsign}
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={inpsign}
              placeholder="Create a password"
              required
            />

            <input type="submit" className="signsub" value="Sign Up" />

            <p className="redirect">
              Already have an account? <Link to="/Login">Login here</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;
