
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function Asiaform(){

  let todata=useNavigate()

  let[insertfrom,setinsertform]=useState([])

  function instdetail(e){
    const{name,value}=e.target
    setinsertform({...insertfrom,[name]:value})

  }

    function detailsubmit(e){
      e.preventDefault()
      const formData = {...insertfrom, price: 9000}

      axios.post('http://localhost:3000/tourism',formData)
      .then(res=>alert("Data Inserted"))
      todata('/Singledetail')
    }


  
    return(
        <>
        <section id="asiasec">
  <h1 className="asiafromhead">Asia Continent</h1>

  <form className="asiaform" onSubmit={detailsubmit}>
    <div>
      <label htmlFor="name" className="asialab1">Enter Name</label>
      <input type="text" name="name" placeholder="Enter Your Name" onChange={instdetail} className="asiainp1" />

      <label htmlFor="contact" className="asialab2">Enter Contact</label>
      <input type="text" name="contact" placeholder="Enter Number" onChange={instdetail} className="asiainp2" />
    </div>

    <div>
      <label htmlFor="age" className="asialab3">Enter Age</label>
      <input type="number" name="age" placeholder="Enter Your Age" onChange={instdetail} className="asiainp3" />

      <label htmlFor="day" className="asialab4">Enter Day</label>
      <input type="number" name="day" placeholder="Number Of Day's" onChange={instdetail} className="asiainp4" />
    </div>

    <div>
      <label htmlFor="date" className="asialab5">Enter Date</label>
      <input type="date" name="date" onChange={instdetail} className="asiainp5" />

      <label htmlFor="person" className="asialab6">Enter Person's</label>
      <input type="number" name="person" placeholder="Number Of Person's" onChange={instdetail} className="asiainp6" />
    </div>

    <div>
      <label htmlFor="price" className="asialab7">Your Price</label>
      <input type="number" name="price" value={9000} readOnly onChange={instdetail} className="asiainp7" />

      <label htmlFor="mode" className="asialab8">Mode Of Travel</label>
      <select name="mode" onChange={instdetail} className="asiainp8">
        <option value="Select Vehicle">Select Vehicle</option>
        <option value="Train">Train</option>
        <option value="Car">Car</option>
        <option value="Bus">Bus</option>
      </select>
    </div>

    <div>
      <label htmlFor="country" className="asialist">Choose Country</label>
      <select name="country" id="asiaoption" onChange={instdetail}>
        <option value="Book Destination">Book Destination</option>
        <option value="Asia - India">Asia - India</option>
        <option value="Asia - China">Asia - China</option>
        <option value="Asia - Iraq">Asia - Iraq</option>
        <option value="Asia - Sri Lanka">Asia - Sri Lanka</option>
        <option value="Asia - Georgia">Asia - Georgia</option>
        <option value="Asia - Cyprus">Asia - Cyprus</option>
        <option value="Asia - Thailand">Asia - Thailand</option>
        <option value="Asia - Brunie">Asia - Brunie</option>
        <option value="Asia - Turkey">Asia - Turkey</option>
        <option value="Asia - Nepal">Asia - Nepal</option>
      </select>
    </div>

    <div>
      <input type="submit" className="asiasub" />
    </div>
  </form>
</section>

        </>
    )
}


export default Asiaform