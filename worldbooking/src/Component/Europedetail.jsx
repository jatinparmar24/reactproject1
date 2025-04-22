
import React from 'react';
import { useNavigate } from 'react-router-dom';





function Europedetail(){


    const tonavigate = useNavigate();

    const handleClick = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
  
      if (isLoggedIn === 'true') {
        tonavigate('/europeform');
      } else {
        tonavigate('/Login');
      }
    };
  
 

    return(

        <section className="infoabout">

            <div className="infomerge">

                <div className="infocenter">
                    <img src="cont5.jpeg" alt="" /><br />
                     <h4>Place : India</h4>
                     <h4>Explore With Family</h4>
                     <h5>5 star Rating</h5>
                     <h3>Price : 11000</h3>
                     <button onClick={handleClick}>Book Now</button>

                </div>

                <div className="infocenter">
                    <img src="cont5.jpeg" alt="" /><br />
                     <h4>Place : India</h4>
                     <h4>Explore With Family</h4>
                     <h5>5 star Rating</h5>
                     <h3>Price : 11000</h3>
                     <button onClick={handleClick}>Book Now</button>

                </div>

                <div className="infocenter">
                    <img src="cont5.jpeg" alt="" /><br />
                     <h4>Place : India</h4>
                     <h4>Explore With Family</h4>
                     <h5>5 star Rating</h5>
                     <h3>Price : 11000</h3>
                    <button>Book Now</button>

                </div>

            </div>

            <div className="infomerge">

<div className="infocenter">
    <img src="cont5.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 11000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont5.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 11000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont5.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 11000</h3>
    <button>Book Now</button>

</div>

</div>


<div className="infomerge">

<div className="infocenter">
    <img src="cont5.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 11000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont5.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 11000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont5.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 11000</h3>
    <button>Book Now</button>

</div>

</div>


<div className="infomerge">

<div className="infocenter">
    <img src="cont5.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 11000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont5.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 11000</h3>
     <button onClick={handleClick}>Book Now</button>

</div>

<div className="infocenter">
    <img src="cont5.jpeg" alt="" /><br />
     <h4>Place : India</h4>
     <h4>Explore With Family</h4>
     <h5>5 star Rating</h5>
     <h3>Price : 11000</h3>
    <button>Book Now</button>

</div>

</div>






            
        </section>
    )
}

export default Europedetail