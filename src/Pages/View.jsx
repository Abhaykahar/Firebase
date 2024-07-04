import React, { useEffect } from 'react'
import Header from '../Component/Header'
import { useDispatch, useSelector } from 'react-redux'
import { ViewUsers, deleteRecord } from '../Redux/action/crud';
import { Link } from 'react-router-dom';

const View = () => {
  const dispatch=useDispatch();
  

  useEffect(()=>{
    dispatch(ViewUsers());
  },[])

  const user=useSelector(state=>state.crud.users);

  const deleteUser = (id) =>{
    dispatch(deleteRecord(id));
  }

  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-lg-11 mx-auto mt-5">
<table className="table border">
  <thead>
    <tr align="center">
      <th scope="col">Sr no</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">Password</th>
      <th scope="col">Gender</th>
      <th scope="col">Courses</th>
      <th scope='col'>Department</th>
      <th scope='col'>Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      user.map((val,index)=>{
        return(
          <tr key={++index} align="center">
            <td>{++index}</td>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.password}</td>
            <td>{val.gender}</td>
            <td>{val.course.join(' , ')}</td>
            <td>{val.department}</td>
            <td>{val.date}</td>
            <td>
              <button className='btn btn-danger btn-sm me-2' onClick={()=>deleteUser(val.id)}>Delete</button>||
              <Link to={`/edit/${val.id}`} >
              <button className='btn btn-primary btn-sm ms-2'>Edit</button>

              </Link>
            </td>
          </tr>
        )
      })
    }
  </tbody>
</table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default View
