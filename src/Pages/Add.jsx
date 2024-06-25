import React from 'react'
import Header from "../Component/Header"


const Add = () => {
  return (
    <div>
      <Header/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5 mt-5 mx-auto border p-5 shadow">
          <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
    <input type="number" className="form-control" id="exampleInputPassword1" />
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
