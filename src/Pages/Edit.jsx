import React, { useEffect, useState } from 'react'
import Header from "../Component/Header"
import { useDispatch, useSelector } from 'react-redux';
import {  editUser } from '../Redux/action/crud';
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {
    const {editid}=useParams();
    console.log(editid);
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const Navigate=useNavigate();

  const dispatch=useDispatch()
  const single=useSelector(state=>state.crud.single);
  console.log(single)
  useEffect(()=>{
    dispatch(editUser(editid));
  },[])

  useEffect(()=>{
    let token=localStorage.getItem('token');
    if(!token){
      Navigate('/');
    }
  },[])

 
  useEffect(() => {
      setname(single?.name);
      setemail(single?.email);

  }, [single]);

  const handle = (e) =>{
    e.preventDefault();

    // let obj={
    //   name:name,
    //   phone:phone,
    // }

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
    <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)} value={name || ""} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">email</label>
    <input type="number" className="form-control" onChange={(e)=>setemail(e.target.value)} value={email || ""}/>
  </div>
  
  <button type="submit" className="btn btn-success mx-auto d-block mt-4">Update</button>
</form> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default Edit
