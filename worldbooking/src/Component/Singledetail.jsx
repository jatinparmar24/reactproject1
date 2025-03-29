import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"



function Singledetail(){

   let tohome=useNavigate()

    let[formdetail,setformdetail]=useState([])

   function delet(id){
    
    axios.delete(`http://localhost:3000/tourism/${id}`)
    .then(res=>alert("Tour Cancelled"))
    tohome('/')
    axios.get('http://localhost:3000/tourism')
    .then(res => setformdetail(res.data));

   }

    useEffect(()=>{
        axios.get('http://localhost:3000/tourism')
        .then(res=>{
            setformdetail(res.data)
        })
    },[])

   
    // for edit form

    let[showform,setshowform]=useState(false)

    // for edit paricular data
       let[editdetail,seteditdetail]=useState({})

       function editdata(e){
        const{name,value}=e.target
        seteditdetail({...editdetail,[name]:value})
       }


       function editfinaldata(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/tourism/${editdetail.id}`,editdetail)
        .then(res=>alert("Data Updated"))
       }

       const lastBooking = formdetail[formdetail.length - 1];
       const total = lastBooking ? lastBooking.price * lastBooking.day * lastBooking.person : 0;
   


    return(
        <>
            <section id="singledata">

            <h1 className="singlehead">Your Booking Details</h1>

<button className="singletohome"><Link to="/" style={{textDecoration:"none",color:"darkblue",fontWeight:"600"}}>To Home Section</Link></button>
<table border="1" className="singledetailtable">
    <thead>
        <tr>

            <th>Name</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Day</th>
            <th>Date</th>
            <th>Person</th>
            <th>Vehicle</th>
            <th>Total</th>
            <th>Destination</th>
            <th style={{backgroundColor:"orangered"}}>Edit</th>
            <th style={{backgroundColor:"orangered"}}>Delete</th>

        </tr>

    </thead>

    <tbody>
    {formdetail.length > 0 && (
                            <tr key={lastBooking.id}>
                                <td>{lastBooking.name}</td>
                                <td>{lastBooking.contact}</td>
                                <td>{lastBooking.age}</td>
                                <td>{lastBooking.day}</td>
                                <td>{lastBooking.date}</td>
                                <td>{lastBooking.person}</td>
                                <td>{lastBooking.mode}</td>
                                <td>{total}</td> {/* Display the calculated total */}
                                <td>{lastBooking.country}</td>
                                <td style={{ backgroundColor: "orangered" }}>
                                    <button onClick={() => (setshowform(true), seteditdetail(lastBooking))} style={{ border: "none", backgroundColor: "orangered" }}>Edit</button>
                                </td>
                                <td style={{ backgroundColor: "orangered" }}>
                                    <button onClick={() => delet(lastBooking.id)} className="delbutton" style={{ border: "none", backgroundColor: "orangered" }}>Delete</button>
                                </td>
                            </tr>
                        )}

    </tbody>

</table>

      
{showform && (
 
<form action="" onSubmit={editfinaldata}>

<div>
      <label htmlFor=""> Enter Name</label>
      <input type="text" name="name" placeholder="Enter Your Name" value={editdetail.name} onChange={editdata} />

      <label htmlFor=""> Enter Contact </label>
      <input type="text" name="contact" placeholder="Enter Contact Number" value={editdetail.contact} onChange={editdata} />
    </div> <br />

    <div>
      <label htmlFor=""> Enter Age</label>
      <input type="number" name="age" placeholder="Enter Your Age" value={editdetail.age} onChange={editdata} style={{marginLeft:"24px"}}/>

      
      <label htmlFor=""> Enter Day</label>
      <input type="number" name="day" placeholder="Number Of Day's" value={editdetail.day} onChange={editdata} style={{marginLeft:"52px"}}/>

    </div> <br /> 

    <div>
      <label htmlFor=""> Enter Date</label>
      <input type="date" name="date" placeholder="Enter Date" value={editdetail.date} onChange={editdata} style={{marginLeft:"10px"}}/>

      <label htmlFor="">Enter Person's</label>
      <input type="number" name="person" placeholder="Number Of Person's" value={editdetail.person} onChange={editdata}/>

    </div> <br /> 


    <div>
     

      <label htmlFor="">Mode Of Travel</label>
      <select name="mode" id="" value={editdetail.mode} onChange={editdata} style={{marginLeft:"-15px",width:"250px",borderRadius:"30px",height:"40px",  boxShadow: "inset 2px 2px 2px grey , 2px 2px 2px grey" ,paddingLeft:"20px"}} >
        <option value="Select Vehicle" >Select Vehicle</option>
        <option value="Train">Train</option>
        <option value="Car">Car</option>
        <option value="Bus">Bus</option>
      </select>

    </div> <br /> 


   <div> <input type="submit" className="singlesubmit" /></div>





</form>
    
)}

            </section>

        </>
    )
}
export default Singledetail


