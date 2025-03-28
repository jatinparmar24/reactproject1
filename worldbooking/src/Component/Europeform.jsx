
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"




function Europeform(){

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

          <h1 className="asiafromhead">Europe Continent</h1>

        <form action="" onSubmit={detailsubmit}>

              
          <div>
            <label htmlFor="" className="asialab1" > Enter Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" onChange={instdetail} className="asiainp1"/>

            <label htmlFor="" className="asialab2" > Enter Contact </label>
            <input type="text" name="contact" placeholder="Enter Number" onChange={instdetail} className="asiainp2" />
          </div> <br /> <br />

          <div>
            <label htmlFor="" className="asialab3"> Enter Age</label>
            <input type="number" name="age" placeholder="Enter Your Age" onChange={instdetail} style={{marginLeft:"25px"}} className="asiainp3"/>

            
            <label htmlFor="" className="asialab4"> Enter Day</label>
            <input type="number" name="day" placeholder="Number Of Day's" onChange={instdetail} style={{marginLeft:"53px"}} className="asiainp4"/>

           

          </div> <br /> <br />

          <div>
            <label htmlFor="" className="asialab5"> Enter Date</label>
            <input type="date" name="date" placeholder="Enter Date" onChange={instdetail} style={{marginLeft:"14px"}} className="asiainp5"/>

            <label htmlFor="" className="asialab6">Enter Person's</label>
            <input type="number" name="person" placeholder="Number Of Person's" onChange={instdetail} style={{marginLeft:"-5px"}} className="asiainp6"/>

          </div> <br /> <br />


          <div>
            <label htmlFor="" className="asialab7">Your Price</label>
            <input type="number" name="price" value={11000} readOnly onChange={instdetail} style={{marginLeft:"19px"}} className="asiainp7"/>

            <label htmlFor="" className="asialab8">Mode Of Travel</label>
            <select name="mode" id="" onChange={instdetail}  className="asiainp8" >
              <option value="Select Vehicle" aria-readonly>Select Vehicle</option>
              <option value="Train">Train</option>
              <option value="Car">Car</option>
              <option value="Bus">Bus</option>
            </select>

          </div> <br /> <br />

       


        
          <label htmlFor="" className="asialist">Choose Country</label> <br /> <br />
          <select name="country" id="asiaoption" onChange={instdetail} >
            <option value="Book Destination" aria-readonly>Book Destination</option>
             <option value="Europe - Russia">Europe - Russia</option>
             <option value="Europe - Ukraine">Europe - Ukraine</option>
             <option value="Europe - France">Europe - France</option>
             <option value="Europe - Spain">Europe - Spain</option>
             <option value="Europe - Sweden">Europe - Sweden</option>
             <option value="Europe - Germany">Europe - Germany</option>
             <option value="Europe - Norway">Europe - Norway</option>
             <option value="Europe - Poland">Europe - Poland</option>
             <option value="Europe - Italy">Europe - Italy</option>
             <option value="Europe - Belarus">Europe - Belarus</option>
          </select>
         

          <div> <input type="submit" className="asiasub"/></div>


       </form>



      </section>
      </>
  )
}
export default Europeform