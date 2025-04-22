
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
      const formData = {...insertfrom, price: 11000}
      axios.post('http://localhost:3000/tourism',formData)
      .then(res=>alert("Data Inserted"))
      todata('/Singledetail')
    }


  
    return(
      <>
      <div className="asiadiv">
      <section id="asiaSec">
        <h1 className="asiaFormHead">Book Your Europe Tour</h1>
    
        <form className="asiaForm" onSubmit={detailsubmit}>
          <div className="inputGroup">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Your Full Name" onChange={instdetail} autoFocus />
          </div>
    
          <div className="inputGroup">
            <label htmlFor="contact">Contact</label>
            <input type="text" name="contact" placeholder="Phone or Email" onChange={instdetail} />
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
            <input type="number" name="price" value={11000} readOnly onChange={instdetail} style={{marginLeft:"19px"}} className="asiainp7"/>
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
export default Europeform



