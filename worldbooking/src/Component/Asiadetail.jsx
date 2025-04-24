import React from 'react';
import { useNavigate } from 'react-router-dom';

function Asiadetail() {
    const tonavigate = useNavigate();

    
    const handleClick = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn')
      
           if (isLoggedIn=='true') {
            console.log(isLoggedIn)
             tonavigate('/Asiaform'); 
           } else {
            alert("Please Login First")
             tonavigate('/Login');
           }

  };
  

  return (
    <section className="infoabout">
      <div className="infomerge">
        <div className="infocenter">
          <img src="cont2.jpeg" alt="" /><br />
          <h4>Place : India</h4>
          <h4>Explore With Family</h4>
          <h5>5 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>

        <div className="infocenter">
          <img src="cont8.jpeg" alt="" /><br />
          <h4>Place : Nepal</h4>
          <h4>Explore With Family</h4>
          <h5>4 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>

        <div className="infocenter">
          <img src="cont3.jpeg" alt="" /><br />
          <h4>Place : Iraq</h4>
          <h4>Explore With Family</h4>
          <h5>4.5 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>
      </div>

      <div className="infomerge">
        <div className="infocenter">
          <img src="cont9.jpeg" alt="" /><br />
          <h4>Place : Cyprus</h4>
          <h4>Explore With Family</h4>
          <h5>5 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>

        <div className="infocenter">
          <img src="cont3.jpeg" alt="" /><br />
          <h4>Place : Turkey</h4>
          <h4>Explore With Family</h4>
          <h5>4 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>

        <div className="infocenter">
          <img src="cont4.jpeg" alt="" /><br />
          <h4>Place : Brunie</h4>
          <h4>Explore With Family</h4>
          <h5>5 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>
      </div>

      <div className="infomerge">
        <div className="infocenter">
          <img src="cont3.jpeg" alt="" /><br />
          <h4>Place : Sri Lanka</h4>
          <h4>Explore With Family</h4>
          <h5>4 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>

        <div className="infocenter">
          <img src="cont8.jpeg" alt="" /><br />
          <h4>Place : Georgia</h4>
          <h4>Explore With Family</h4>
          <h5>5 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>

        <div className="infocenter">
          <img src="cont3.jpeg" alt="" /><br />
          <h4>Place : China</h4>
          <h4>Explore With Family</h4>
          <h5>5 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>
      </div>

      <div className="infomerge">
        <div className="infocenter">
          <img src="cont4.jpeg" alt="" /><br />
          <h4>Place : Thailand</h4>
          <h4>Explore With Family</h4>
          <h5>5 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>

        <div className="infocenter">
          <img src="cont4.jpeg" alt="" /><br />
          <h4>Place : Turkey</h4>
          <h4>Explore With Family</h4>
          <h5>4.5 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>

        <div className="infocenter">
          <img src="cont4.jpeg" alt="" /><br />
          <h4>Place : India</h4>
          <h4>Explore With Family</h4>
          <h5>5 star Rating</h5>
          <h3>Price : 9000</h3>
          <button onClick={handleClick}>Book Now</button>
        </div>
      </div>

    </section>
  );
}

export default Asiadetail;
