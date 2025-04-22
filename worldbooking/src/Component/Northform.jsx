
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"




function Northform(){

  let todata=useNavigate()

  let[insertfrom,setinsertform]=useState([])

  function instdetail(e){
    const{name,value}=e.target
    setinsertform({...insertfrom,[name]:value})

  }

    function detailsubmit(e){
      e.preventDefault()
      const formData = {...insertfrom, price: 20000}
      axios.post('http://localhost:3000/tourism',formData)
      .then(res=>alert("Data Inserted"))
      todata('/Singledetail')
    }


  
    return(
      <>
     <div className="asiadiv">
      <section id="asiaSec">
        <h1 className="asiaFormHead">Book Your North America Tour</h1>
    
        <form className="asiaForm" onSubmit={detailsubmit}>
          <div className="inputGroup">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Your Full Name" onChange={instdetail} autoFocus />
          </div>
    
          <div className="inputGroup">
            <label htmlFor="contact">Contact</label>
            <input type="number" name="contact" placeholder="Enter Number" onChange={instdetail} />
          </div>
    
          <div className="inputGroup">
            <label htmlFor="age">Age</label>
            <input type="number" name="age" placeholder="Your Age" onChange={instdetail} />
          </div>
    
          <div className="inputGroup">
            <label htmlFor="day">Number of Days</label>
            <input type="number" name="day" placeholder="Trip Duration" onChange={instdetail} />
          </div>
    
          <div className="inputGroup">
            <label htmlFor="date">Start Date</label>
            <input type="date" name="date" onChange={instdetail} />
          </div>
    
          <div className="inputGroup">
            <label htmlFor="person">Number of Persons</label>
            <input type="number" name="person" placeholder="Travelers Count" onChange={instdetail} />
          </div>
    
          <div className="inputGroup">
            <label htmlFor="price">Estimated Price</label>
            <input type="number" name="price" value={20000} readOnly onChange={instdetail} style={{marginLeft:"19px"}} className="asiainp7"/>
            </div>
    
          <div className="inputGroup">
            <label htmlFor="mode">Mode of Travel</label>
            <select name="mode" onChange={instdetail}>
              <option value="">Select Vehicle</option>
              <option value="Train">Train</option>
              <option value="Car">Car</option>
              <option value="Bus">Bus</option>
            </select>
          </div>
    
          <div className="inputGroup">
            <label htmlFor="country">Destination Country</label>
            <select name="country" onChange={instdetail}>
                                    
                  <option value="Book Destination" aria-readonly>Book Destination</option>
                  <option value="North Am. - USA">North Am. - USA</option>
                  <option value="North Am. - Canada">North Am. - Canada</option>
                  <option value="North Am. - Mexico">North Am. - Mexico</option>
                  <option value="North Am. - Guatemala">North Am. - Guatemala</option>
                  <option value="North Am. - Panama">North Am. - Panama</option>
                  <option value="North Am. - Cuba">North Am. - Cuba</option>
                  <option value="North Am. - Costa Rica">North Am. - Costa Rica</option>
                  <option value="North Am. - Nicaragua">North Am. - Nicaragua</option>
                  <option value="North Am. - Barbados">North Am. - Barbados</option>
                  <option value="North Am. - Greenland">North Am. - Greenland</option>
            </select>
          </div>
    
          <div className="submitBtn">
            <input type="submit" value="Book Now" />
          </div>
        </form>
      </section>
    </div>
      </>
  )
}
export default Northform



