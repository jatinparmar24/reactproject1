


import { Link } from "react-router-dom"

import Carousel from 'react-bootstrap/Carousel';

import {FcAbout, FcAddImage, FcAddRow, FcAdvance, FcAnswers, FcAreaChart, FcBadDecision,  FcBookmark, FcCalendar, FcCallback, FcCamera, FcComboChart, FcDataRecovery, FcLibrary, FcPackage, FcPhotoReel, FcPlanner, FcPodiumWithoutSpeaker, FcProcess, FcSelfie, FcSettings, FcShop, FcTodoList, FcTrademark, FcTwoSmartphones, FcVideoCall, FcVideoProjector, FcViewDetails} from 'react-icons/fc'


function NavHero(){






    return(
        <>
           
        
        <section id="sec1">

            <i id="sec1head"><b>Welcome To World Tour</b></i>
           

            <div id="sec1maindiv">
                <div className="sec1child1"></div>
                <div className="sec1child2">
                    <div> <div className="firstimg">USA</div><img src="cont1.jpeg" alt=""  style={{width:"200px",height:"230px"}}/></div>


                    <div> <div className="firstimg">Dubai</div><img src="cont2.jpeg" alt=""  style={{width:"200px",height:"230px"}}/></div>


                    <div><div className="firstimg">Ukraine</div><img src="cont3.jpeg" alt=""  style={{width:"200px",height:"230px"}}/></div>


                    <div><div className="firstimg">Bali</div><img src="cont4.jpeg" alt=""  style={{width:"200px",height:"230px"}}/></div>


                    <div><div className="firstimg">Sweden</div><img src="cont5.jpeg" alt=""  style={{width:"200px",height:"230px"}}/></div>


                    <div><div className="firstimg">Panama</div><img src="cont6.jpeg" alt=""  style={{width:"200px",height:"230px"}}/></div>


                    <div><div className="firstimg">France</div><img src="cont7.jpeg" alt=""  style={{width:"200px",height:"230px"}}/></div>


                    <div><div className="firstimg">India</div><img src="cont8.jpeg" alt=""  style={{width:"200px",height:"230px"}}/></div>


                </div>
            </div> <br /> <br /> <br /> <br />

        

         
             <div id="borderdiv">


                
          <marquee behavior="alternate" direction="right">

                  <div id="marqdiv">
                  
                   <img src="cont9.jpeg" alt=""  style={{width:"150px",height:"150px",borderRadius:"30px"}}/><img src="cont10.jpeg" alt=""  style={{width:"150px",height:"150px",borderRadius:"30px"}}/><img src="nature2.jpg" alt=""  style={{width:"150px",height:"150px",borderRadius:"30px"}}/>
                   <img src="cont11.jpeg" alt=""  style={{width:"150px",height:"150px",borderRadius:"30px"}}/><img src="cont12.jpeg" alt=""  style={{width:"150px",height:"150px",borderRadius:"30px"}}/><img src="nature1.jpg" alt=""  style={{width:"150px",height:"150px",borderRadius:"30px"}}/>
                   
                  
                  
                  
                  </div>
          </marquee>
             </div>


        </section>
              
        <section id="sec2">
              
              
          <h1 id='sec2head'>Slide Show</h1>
          
          <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block"
            src="cont11.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="cont9.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="cont7.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
              
        </section>
        {/* section 2 */}

        {/* section 3 */}

        <section id="sec3">
              
        <h1 id="sec3head">About Us</h1>

<div className="sec3rightd1"></div>
<div className="sec3rightd2"></div>

<div id="sec3maindiv"><video src="world video.mp4" loop autoPlay muted ></video></div>

<div className="sec3leftd1"></div>
<div className="sec3leftd2"></div>




<div id='sec3leftcorner'>
 
  <h1>Locations</h1>             
  <FcAreaChart/> <FcAdvance/> <FcAddImage/>
  <h2><i>To Offer</i></h2> 
  

</div>

 <div id='sec3rightcorner'>

 <h1>Connection</h1>
  <FcTwoSmartphones/> <FcAdvance/> <FcProcess/> 
  <h2><i>Help</i></h2>
 

</div>



<h1 className='sec3subhead1'><p>Lorem ipsum dolor sit amet</p></h1>

<div id='sec3bottom1'>

  <h1>Security</h1>
 <FcAbout style={{fontSize:"50px"}}/> <FcSettings style={{fontSize:"50px"}}/> <br />
  <h2>Contact</h2>
  <FcVideoCall style={{fontSize:"50px"}}/> <FcCallback style={{fontSize:"50px"}}/>
  <h3>Travel Plan</h3>
  <FcSelfie style={{fontSize:"50px"}}/> <FcVideoProjector style={{fontSize:"50px"}}/>
  <h4>Development</h4>
  <FcAnswers style={{fontSize:"50px"}}/> <FcBadDecision style={{fontSize:"50px"}}/>
  

</div>

<div id='sec3bottom2'>

  <h1>Planning</h1>
  <FcTodoList style={{fontSize:"50px"}}/> <FcPackage style={{fontSize:"50px"}}/> <br />
  <h2>Times</h2>
  <FcCalendar style={{fontSize:"50px"}}/> <FcPlanner style={{fontSize:"50px"}}/>
  <h3>Scenery</h3>
  <FcPhotoReel style={{fontSize:"50px"}}/> <FcCamera style={{fontSize:"50px"}}/>
  <h4>Management</h4>
  <FcViewDetails style={{fontSize:"50px"}}/> <FcDataRecovery style={{fontSize:"50px"}}/>



</div>

<h1 className='sec3subhead1'>
  <p>Lorem ipsum dolor sit amet</p>
</h1>

<h1 className='sec3lasthead'>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
</h1>



        </section>

        {/* section 3 */}

        {/* section 4 */}

        <section id="sec4">

        <h1 id="sec4head">Book Your Place</h1>

<div id="sec4div1"></div>

<div id="sec4div1a">
    <h1>Asia</h1>
       <h2> World's Biggest Continent Welcome's You </h2>
       <h2>A Place Filled With Many Different Culture and Tradition</h2>
       <h2>Places Never Explore Before Pack Your Bag And Start your Journey</h2>
       <button id="bookbotton"><Link to='/Asiaform' style={{textDecoration:"none",color:"Black"}}>Click To Visit Asia</Link></button>
</div>

<div id="sec4div2"></div>

<div id="sec4div2a">
    <h1>Europe</h1>
        <h2>Welcome To Europe</h2>
        <h2>The Place Filled With Happiness Awaits For You</h2>
        <h2>The Continent With Full Of Light And Joy Is Wiating For You </h2>
        <button id="bookbotton"><Link to='/Europeform' style={{textDecoration:"none",color:"Black"}}>Click To Visit Europe</Link></button>
</div>

<div id="sec4div3"></div>

<div id="sec4div3a">
    <h1>Africa</h1>
       <h2>Continent Of Tribes</h2>
       <h2>Africa The Continent Of Adventure </h2>
       <h2>Places That Amazes AT Single Time You see</h2>
       <button id="bookbotton"><Link to='/Africaform' style={{textDecoration:"none",color:"Black"}}>Click To Visit Africa</Link></button>
</div>

<div id="sec4div4"></div>

<div id="sec4div4a">
    <h1>North America</h1>
       <h2>The Place Of Growth</h2>
       <h2>The Place of Innovation </h2>
       <h2>Continent Of Development And Adventure</h2>
       <button id="bookbotton"><Link to='/Northform' style={{textDecoration:"none",color:"Black"}}>Click To Visit North America</Link></button>
</div>

<div id="sec4div5"></div>

<div id="sec4div5a">
    <h1>South America</h1>
    <h2>Place Of Height And Distance</h2>
    <h2>Mountains and Forest Are Just Amazing</h2>
    <h2>Amazon Rainforest Awiats For you To Visit At Once</h2>
    <button id="bookbotton"><Link to='/Southform' style={{textDecoration:"none",color:"Black"}}>Click To Visit South America</Link></button>
</div>

<div id="sec4div6"></div>

<div id="sec4div6a">
<h1> Australia</h1>
    <h2> World's Biggest Island</h2>
    <h2>Places Of Endangerd Species</h2>
    <h2>Sorrounded By Oceans Filled With Sea-shore</h2>
    <button id="bookbotton"><Link to='/Australiaform' style={{textDecoration:"none",color:"Black"}}>Click To Visit Australia</Link></button>
</div>


        </section>
        
        </>
    )
}

export default NavHero