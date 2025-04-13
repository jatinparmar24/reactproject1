import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp(){

  let tologin=useNavigate()

  let[signdata,setsigndata]=useState({
    name:"",age:"",contact:"",email:"",password:""
  })

  function inpsign(e){
    const {name,value}=e.target
    setsigndata({...signdata,[name]:value})
  }

  function signsubmit(e){
    e.preventDefault()
    localStorage.setItem("userdetails",JSON.stringify(signdata))
    tologin('/Login')
  }


    return(


        <>
          <section id="signuppage">
            <h1 className="signhead">Sign Up Form</h1>
            <div className="signcenter">
               
               <form action="" onSubmit={signsubmit}>

                  <h1>Enter Name </h1>
                   <input type="text"  name="name" onChange={inpsign} placeholder="Enter Your Name"  required/>
                    
                   <h1 style={{marginLeft:"-33%"}}>Enter Age </h1>
                   <input type="text"  name="age" onChange={inpsign} placeholder="Enter Your Age"  required/>
       
                   <h1 style={{marginLeft:"-27%"}}>Enter Contact </h1>
                   <input type="text"  name="contact" onChange={inpsign} placeholder="Enter Your Contact" required />
       
                   <h1 style={{marginLeft:"-28%"}}>Enter E-Mail </h1>
                   <input type="text"  name="email" onChange={inpsign} placeholder="Enter Your E-Mail"  required/>
       
                   <h1 style={{marginLeft:"-24%"}}>Enter Password </h1>
                   <input type="text"  name="password" onChange={inpsign} placeholder="Enter Your Password"  required/> <br /> <br />
                   
                   <input type="submit"  className="signsub"/> <br /> <br />

               </form>

            
            </div>

            



          </section>
        </>
    )
}

export default SignUp