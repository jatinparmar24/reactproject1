import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcGlobe, FcShop, FcCamera} from 'react-icons/fc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';


function Login() {


   const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('userdetails'));
      setUser(data);
    }, []);
  
    const logout = () => {
      localStorage.removeItem('userdetails');
      localStorage.setItem("isLoggedIn", "false");
  
      setUser(null);
    };
  
  const tohome = useNavigate();

  const [logindata, setlogindata] = useState({
    name: "",
    password: "",
  });

  const [signupdata, setsignupdata] = useState(null);


  function inplog(e) {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
  }

 
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

    if (!signupdata) {
      alert("No user details found. Please sign up first.");
      return;
    }

   
    if (signupdata.name !== logindata.name || signupdata.password !== logindata.password) {
      alert("User Not Found or Incorrect Password");
      return;
    }

  
    const userData = {
      name: signupdata.name,
      contact: signupdata.contact || "",
      email: signupdata.email || "",    
      role: "user"
    };

    localStorage.setItem("isLoggedIn", 'true');
    localStorage.setItem("userdata", JSON.stringify(userData));

    tohome("/");
  }

  return (
    <>

 {/* Navbar */}
 <nav className="navbar">
    <div className="navbar-left">
      <FcGlobe className="globe-icon" />
      <h1 className="logo-text">World Tour</h1>
    </div>

    <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
      <li><Link to='/NavHero' style={{textDecoration:"none",color:"Black"}}>Home</Link></li>
      <li><Link to='/NavHero' style={{textDecoration:"none",color:"Black"}}>Booking</Link></li>
      <li><Link to='/NavHero' style={{textDecoration:"none",color:"Black"}}>Services</Link></li>
      <li>
          <Link to="/Login" className="nav-link">Login</Link>
      </li>
      
      <li><FcShop className="icon" /></li>
      <li><FcCamera className="icon" /></li>
    </ul>

    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
    </div>
  </nav>

<section id="loginpage">
 

  {/* Login Form Section */}
 
    <div className="logincenter">
      <form onSubmit={loginsubmit}>
        <h1>Enter Name</h1>
        <input type="text" name="name" onChange={inplog} required />
        
        <h1>Enter Password</h1>
        <input type="password" name="password" onChange={inplog} required />

        <input type="submit" className="loginsub" value="Login" />
        
        <h2>Don't have an account?</h2>
        <Link to="/SignUp" className="loginsub">Sign Up</Link>
      </form>
    </div>

</section>

    </>
  );
}

export default Login;
