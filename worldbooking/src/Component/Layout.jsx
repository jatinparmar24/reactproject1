


import { useEffect, useState } from "react"
import { FcBinoculars, FcGlobe} from "react-icons/fc"

import { FcShop } from "react-icons/fc"
import { FcCamera } from "react-icons/fc"
import { Link, Outlet } from "react-router-dom"

import { FcAdvertising, FcButtingIn, FcContacts, FcDatabase, FcDepartment, FcGoogle, FcMiddleBattery, FcMindMap } from "react-icons/fc";



function Layout(){

    let[user,setuser]=useState("")
    
        useEffect(()=>{
            let data=JSON.parse(localStorage.getItem("userdetails"))
            setuser(data)
        },[])
    
        function logout(){
         localStorage.removeItem("userdetails")
         setuser();
        }
    return(
        <>
            <nav id="navbar">
                <ul>
                    <h1 className="globeanimation"> <FcGlobe style={{marginTop:"-15px",fontSize:"65px"}}/></h1>
                  
                </ul>
                <ul>
                    <h1 style={{color:"black"}}> World Tour</h1>
                </ul>

                <ul className="navhome">
                    <li>Home</li>
                    <li>Booking</li>
                    <li>Services</li>
                    <li>
                        {user?(
                            <Link onClick={logout} style={{textDecoration:"none",color:"black"}}>Logout</Link>
                        ):
                        (<Link to='/Login' style={{textDecoration:"none",color:"black"}}>Login</Link>
                            
                        )}
                    </li>
                    
                </ul>

                <ul className="navicon"> 
                <div id="person-name">{user?user.name:""}</div> 
                    {/* <li><FcBinoculars/></li> */}
                    <li><FcShop/></li>
                    <li><FcCamera/></li>
                   
                </ul>
            </nav>


            <Outlet/>

            <footer id="footer" >
            <div id="footmaindiv">
                <div>
                    <h2>Management</h2> <br />
                    
                    <h4>Network</h4>
                    <h4>Public</h4>
                    <h4>Multimedia</h4>
                    <h4>Data Balance</h4>
                </div>

                <div>
                    <h2>Social Media</h2>

                    <h4>Linkdin</h4>
                    <h4>Twitter</h4>
                    <h4>Youtube</h4>
                    <h4>Instagram</h4>
                </div>


                <div>

                    <h2>Contact Us</h2> <br />

                    <h4>24*7</h4>
                    <h4>Business</h4>
                    <h4>Communication</h4>
                    <h4>Term And Condition</h4>
                   
                </div>

                <div className="foothide" >
                    <h2>Topics</h2>

                    <h4>Travel</h4>
                    <h4>Tourism</h4>                   
                    <h4>Voaction</h4>
                    <h4>Automobile</h4>
                </div>

                <div>

                    <h2>About Us</h2> <br />

                    <h4>Development</h4>
                    <h4>Data Analyst</h4>                  
                    <h4>Contect Officer</h4>
                    <h4>World Explore</h4>
                </div>


                


            </div>

            <div className="footicon">

                  <i>@World Tour ,123,New York</i>  <FcGoogle className="iconhide"/> <FcContacts className="iconhide"/> <FcDepartment className="iconhide"/> <FcAdvertising className="iconhide"/>
                </div>

                
        </footer>

        </>
    )
}
export default Layout