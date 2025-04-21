import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


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
  <h1 className="signhead">Create Your Account</h1>
  <div className="signcenter">
    <form onSubmit={signsubmit}>

      <label htmlFor="name">Full Name</label>
      <input type="text" name="name" onChange={inpsign} placeholder="Enter your full name" required />

      <label htmlFor="age">Age</label>
      <input type="number" name="age" onChange={inpsign} placeholder="Enter your age" required />

      <label htmlFor="contact">Contact Number</label>
      <input type="tel" name="contact" onChange={inpsign} placeholder="Enter your contact number" required />

      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" onChange={inpsign} placeholder="Enter your email" required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={inpsign} placeholder="Create a password" required />

      <input type="submit" className="signsub" value="Sign Up" />

      <p className="redirect">Already have an account? <Link to="/Login">Login here</Link></p>
    </form>
  </div>
</section>

        </>
    )
}

export default SignUp