import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const tohome = useNavigate();

  const [logindata, setlogindata] = useState({
    name: "",
    password: "",
  });

  const [signupdata, setsignupdata] = useState(null);

  // Handle input change
  function inplog(e) {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
  }

  // Fetch user details from localStorage
  useEffect(() => {
    const signdetail = JSON.parse(localStorage.getItem("userdetails"));
    if (signdetail) {
      setsignupdata(signdetail); 
    }
  }, []);

  function loginsubmit(e) {
    e.preventDefault();

    // Admin login check
    if (logindata.name === "admin" && logindata.password === "admin123") {
      alert("Admin login successful");
      const admindata = { name: "admin", role: "admin" };
      localStorage.setItem("userdata", JSON.stringify(admindata));
      localStorage.setItem("isLoggedIn", "true");
      tohome("/Admin");
      return;
    }

    // Check if the user has signed up
    if (!signupdata) {
      alert("No user details found. Please sign up first.");
      return;
    }

    // Validate user credentials
    if (signupdata.name !== logindata.name || signupdata.password !== logindata.password) {
      alert("User Not Found or Incorrect Password");
      return;
    }

    // If login is successful, save login state and full user data
    const userData = {
      name: signupdata.name,
      contact: signupdata.contact || "", // Save contact if it exists
      email: signupdata.email || "",     // Optional: if you also save email
      role: "user"
    };

    localStorage.setItem("isLoggedIn", 'true');
    localStorage.setItem("userdata", JSON.stringify(userData));

    tohome("/");
  }

  return (
    <>
      <section id="loginpage">
        <h1 className="loginhead">Login Form</h1>
        <div className="logincenter">
          <form onSubmit={loginsubmit}>
            <h1>Enter Name</h1>
            <input 
              type="text" 
              name="name" 
              onChange={inplog} 
              placeholder="Enter Your Name" 
              required 
            /> 
            <br /> <br />

            <h1>Enter Password</h1>
            <input
              type="password" 
              name="password"
              onChange={inplog}
              placeholder="Enter Your Password"
              required
            /> 
            <br /> <br />

            <input type="submit" value="Login" className="loginsub" />
            <br /> <br />

            <h2 style={{ color: "darkblue", fontWeight: "600" }}>Don't have an account?</h2>

            <Link to="/SignUp" className="loginsub" style={{ textDecoration: "none", color: "black" }}>
              Sign Up
            </Link>
          </form>
        </div>

        <div className="loginside">
          <h1>Welcome To</h1>
          <h2>World Tour</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti distinctio rem iste quis nam nihil
            similique. Sunt minima magnam ea, nisi explicabo, obcaecati illo nobis commodi error aliquid, dolorem iusto?
            Quo eius ab dolores saepe cum quaerat, sint maiores! Fuga rem odio totam nobis molestias dolorum iusto,
            voluptatum velit maxime!
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;
