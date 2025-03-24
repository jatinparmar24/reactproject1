

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"




function Africaform(){

  let todata=useNavigate()

  let[insertfrom,setinsertform]=useState([])

  function instdetail(e){
    const{name,value}=e.target
    setinsertform({...insertfrom,[name]:value})

  }

    function detailsubmit(e){
      e.preventDefault()
      axios.post('http://localhost:3000/tourism',insertfrom)
      .then(res=>alert("Data Inserted"))
      todata('/Singledetail')
    }


  
    return(
        <>
        <section id="asiasec">

            <h1 className="asiafromhead">Africa Continent</h1>

          <form action="" onSubmit={detailsubmit}>

                
            <div>
              <label htmlFor=""> Enter Name</label>
              <input type="text" name="name" placeholder="Enter Your Name" onChange={instdetail} />

              <label htmlFor=""> Enter Contact </label>
              <input type="text" name="contact" placeholder="Enter Contact Number" onChange={instdetail} />
            </div> <br /> <br />

            <div>
              <label htmlFor=""> Enter Age</label>
              <input type="number" name="age" placeholder="Enter Your Age" onChange={instdetail} style={{marginLeft:"25px"}}/>

              
              <label htmlFor=""> Enter Day</label>
              <input type="number" name="day" placeholder="Number Of Day's" onChange={instdetail} style={{marginLeft:"53px"}}/>

             

            </div> <br /> <br />

            <div>
              <label htmlFor=""> Enter Date</label>
              <input type="date" name="date" placeholder="Enter Date" onChange={instdetail} style={{marginLeft:"14px"}}/>

              <label htmlFor="">Enter Person's</label>
              <input type="number" name="person" placeholder="Number Of Person's" onChange={instdetail} style={{marginLeft:"-5px"}}/>

            </div> <br /> <br />


            <div>
              <label htmlFor="">Your Price</label>
              <input type="number" name="price" value={3000} readOnly onChange={instdetail} style={{marginLeft:"19px"}} />

              <label htmlFor="">Mode Of Travel</label>
              <select name="mode" id="" onChange={instdetail} style={{marginLeft:"-15px",width:"250px",borderRadius:"30px",height:"40px",  boxShadow: "inset 2px 2px 2px grey , 2px 2px 2px grey"}} >
                <option value="Select Vehicle" aria-readonly>Select Vehicle</option>
                <option value="Train">Train</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
              </select>

            </div> <br /> <br />

         


          
            <label htmlFor="" className="asialist">Choose Country</label> <br /> <br />
            <select name="country" id="asiaoption" onChange={instdetail} >
              <option value="Book Destination" aria-readonly>Book Destination</option>
              <option value="AFriac - India">Africa - India</option>
              <option value="AFriac - China">Africa - China</option>
              <option value="AFriac - Iraq">Africa - Iraq</option>
              <option value="AFriac - Sri Lanka">Africa - Sri Lanka</option>
            </select>
           

            <div> <input type="submit" className="asiasub"/></div>


         </form>



        </section>
        </>
    )
}
export default Africaform