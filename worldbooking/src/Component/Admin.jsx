import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


function Admin(){

    let[formdata,setformdata]=useState([])

    useEffect((e)=>{
      axios.get('http://localhost:3000/tourism')
      .then(res=>{setformdata(res.data)})
    },[del])

    function del(id){
        axios.delete(`http://localhost:3000/tourism/${id}`)
        .then(res=>alert("Deleted"))
    }

   
    return(
        <>
            <section id="dashboard">
            <h1 className="adminhead">Admin Dash-Board</h1>

<button className="adminbtu"><Link to="/" style={{textDecoration:"none",color:"darkblue",fontWeight:"600"}}>To Home Section</Link></button>

<table border="1" id="admindash">
    <thead>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Day</th>
            <th>Date</th>
            <th>Person</th>
            <th>Vehicle</th>
            <th>Destination</th>
            <th>Total</th>
            <th>Delete</th>
            
        </tr>
    </thead>

    <tbody>
    {formdata.map((e, index) => {
              // Calculate total price
              const totalPrice = e.price * e.day * e.person;

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.contact}</td>
                  <td>{e.age}</td>
                  <td>{e.day}</td>
                  <td>{e.date}</td>
                  <td>{e.person}</td>
                  <td>{e.mode}</td>
                  <td>{e.country}</td>
                  <td>{totalPrice}</td>
                  <td >
                    <button onClick={() => del(e.id)} >Delete</button>
                  </td>
                </tr>
              );
            })}


    </tbody>

</table>
            </section>
        </>
    )
}
export default Admin