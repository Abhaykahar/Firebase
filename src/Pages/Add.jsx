import React, { useState } from 'react'
import Header from "../Component/Header"
import { useDispatch } from 'react-redux';
import { Adduser } from '../Redux/action/crud';
import { useNavigate } from 'react-router-dom';


const Add = () => {
  const [name,setname]=useState("");
  const [phone,setphone]=useState("");
  const Navigate=useNavigate();

  const dispatch=useDispatch()

  const handle = (e) =>{
    e.preventDefault();

    let obj={
      name:name,
      phone:phone,
    }

    dispatch(Adduser(obj));
    alert("add sucessfully....");
    Navigate('/view')
    
  }
  return (
    <div>
      <Header/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5 mt-5 mx-auto border p-5 shadow">
          <form onSubmit={handle}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)} value={name} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
    <input type="number" className="form-control" onChange={(e)=>setphone(e.target.value)} value={phone}/>
  </div>
  
  <button type="submit" className="btn btn-success mx-auto d-block mt-4">Submit</button>
</form> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default Add
