
import React from 'react';
import { useNavigate } from 'react-router-dom';





function Southdetail(){


    const tonavigate = useNavigate();

    const handleClick = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
  
      if (isLoggedIn === 'true') {
        tonavigate('/southform');
      } else {
        tonavigate('/Login');
      }
    };
  
 

    return(

        <section className="infoabout">

            <div className="infomerge">

                <div className="infocenter">
                    <img src="cont9.jpeg" alt="" /><br />
                     <h4>Place : India</h4>
                     <h4>Explore With Family</h4>
                     <h5>5 star Rating</h5>
                     <h3>Price : 19000</h3>
                     <button onClick={handleClick}>Book Now</button>

                </div>

                <div className="infocenter">
                    <img src="cont9.jpeg" alt="" /><br />
                     <h4>Place : India</h4>
                     <h4>Explore With Family</h4>
                     <h5>5 star Rating</h5>
                     <h3>Price : 19000</h3>
                     <button onClick={handleClick}>Book Now</button>

                </div>

                <div className="infocenter">
                    <img src="cont9.jpeg" alt="" /><br />
                     <h4>Place : India</h4>
                     <h4>Explore With Family</h4>
                     <h5>5 star Rating</h5>
                     <h3>Price : 19000</h3>
                    <button>Book Now</button>

                </div>

            </div>

            <div className="infomerge">

<div className="infocenter">
    <img src="cont9.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 19000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont9.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 19000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont9.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 19000</h3>
    <button>Book Now</button>

</div>

</div>


<div className="infomerge">

<div className="infocenter">
    <img src="cont9.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 19000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont9.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 19000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont9.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 19000</h3>
    <button>Book Now</button>

</div>

</div>


<div className="infomerge">

<div className="infocenter">
    <img src="cont9.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 19000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont9.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 19000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont9.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 19000</h3>
    <button>Book Now</button>

</div>

</div>



        </section>
    )
}

export default Southdetail