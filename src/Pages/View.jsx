import React, { useEffect } from 'react'
import Header from '../Component/Header'
import { useDispatch, useSelector } from 'react-redux'
import { ViewUsers } from '../Redux/action/crud';

const View = () => {
  const dispatch=useDispatch();
  

  useEffect(()=>{
    dispatch(ViewUsers());
  },[])

  const user=useSelector(state=>state.crud.users);

  return (
    <div>
      <Header/>
      <div className="conatiner">
        <div className="row">
          <div className="col-lg-8 mx-auto mt-5">
<table className="table border">
  <thead>
    <tr>
      <th scope="col">Sr no</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      user.map((val,index)=>{
        return(
          <tr key={++index}>
            <td>{++index}</td>
            <td>{val.name}</td>
            <td>{val.phone}</td>
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
