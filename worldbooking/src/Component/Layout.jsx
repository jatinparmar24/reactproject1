import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FcGlobe, FcShop, FcCamera, FcGoogle, FcContacts, FcDepartment, FcAdvertising } from 'react-icons/fc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Layout = () => {
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

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <FcGlobe className="globe-icon" />
          <h1 className="logo-text">World Tour</h1>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li>Home</li>
          <li>Booking</li>
          <li>Services</li>
          <li>
            {user ? (
              <Link onClick={logout} className="nav-link">Logout</Link>
              
            ) : (
              <Link to="/Login" className="nav-link">Login</Link>
            )}
          </li>
          {user && <li className="username">{user.name}</li>}
          <li><FcShop className="icon" /></li>
          <li><FcCamera className="icon" /></li>
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </nav>

      <Outlet />

      <footer id="footer">
        <div id="footmaindiv">
          <div>
            <h2>Management</h2><br />
            <h4>Network</h4>
            <h4>Public</h4>
            <h4>Multimedia</h4>
            <h4>Data Balance</h4>
          </div>
          <div>
            <h2>Social Media</h2>
            <h4>LinkedIn</h4>
            <h4>Twitter</h4>
            <h4>YouTube</h4>
            <h4>Instagram</h4>
          </div>
          <div>
            <h2>Contact Us</h2><br />
            <h4>24*7</h4>
            <h4>Business</h4>
            <h4>Communication</h4>
            <h4>Terms and Conditions</h4>
          </div>
          <div className="foothide">
            <h2>Topics</h2>
            <h4>Travel</h4>
            <h4>Tourism</h4>
            <h4>Vacation</h4>
            <h4>Automobile</h4>
          </div>
          <div className="lastfoot">
            <h2>About Us</h2><br />
            <h4>Development</h4>
            <h4>Data Analyst</h4>
            <h4>Contact Officer</h4>
            <h4>World Explore</h4>
          </div>
        </div>

        <div className="footicon">
          <i>@World Tour, 123, New York</i>
          <FcGoogle className="iconhide" />
          <FcContacts className="iconhide" />
          <FcDepartment className="iconhide" />
          <FcAdvertising className="iconhide" />
        </div>
      </footer>
    </>
  );
};

export default Layout;
