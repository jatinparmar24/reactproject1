
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



function Login(){

  let tohome=useNavigate()


  let[logindata,setlogindata]=useState({
    name:"",password:""
  })

  let[signupdata,setsignupdata]=useState("")






  function inplog(e){
    const{name,value}=e.target
    setlogindata({...logindata,[name]:value})
  }

  useEffect(()=>{
       let signdetail=JSON.parse(localStorage.getItem("userdetails"))
       setsignupdata(signdetail)
     },[])

     function loginsubmit(e){
       e.preventDefault()

       if (logindata.name === "admin" && logindata.password === "admin123"){
        alert("admin login successfull")
        let admindata = {name:"admin",role:"admin"}
        localStorage.setItem("userdata",JSON.stringify(admindata))
        localStorage.setItem("islogin","true")
        tohome("/Admin")
        return;
        
       }

       if(signupdata.name !=logindata.name && signupdata.password !=logindata.password){
         alert("User Not Found")
       }
       else{
          tohome('/')
       }
     }



    return(
        <>
          <section id="loginpage">
            <h1 className="loginhead">Login Form</h1>
             <div className="logincenter">

             <form action="" onSubmit={loginsubmit}>
                     <h1>Enter Name</h1>
                     <input type="text" name="name" onChange={inplog} placeholder="Enter Your Name" required /> <br /> <br />
     
                     <h1>Enter Password </h1>
                     <input type="text" name="password" onChange={inplog} placeholder="Enter Your Password" required /> <br /> <br />
     
                     <input type="submit" value="Login" className="loginsub" /><br /> <br />
     
                     <h2 style={{color:"darkblue",fontWeight:"600"}}>Don't have An Account ?</h2>
     
                     <button style={{backgroundColor:"#4264fe"}}><Link to="/SignUp" style={{textDecoration:"none",color:"black"}}>Sign Up</Link></button>
                </form>

             </div>

            
          </section>
        </>
    )
}

export default Login