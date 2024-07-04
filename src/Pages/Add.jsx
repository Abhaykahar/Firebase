import React, { useState } from 'react'
import Header from "../Component/Header"
import { useDispatch } from 'react-redux';
import { Adduser } from '../Redux/action/crud';
import { useNavigate } from 'react-router-dom';


const Add = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setGender] = useState("")
  const [course, setCourse] = useState([])
  const [date, setDate] = useState("")
  const [department, setDepartment] = useState("")
  const Navigate = useNavigate();

  const dispatch = useDispatch()

  const handle = (e) => {
    e.preventDefault();
    if( !name || !email || !password || !gender || !course || !date || !department){
      alert("All fill reuired");
      return false;
    }
    

    let obj = {
      name: name,
      email: email,
      password: password,
      gender: gender,
      course: course,
      date: date,
      department: department
    }

    dispatch(Adduser(obj));
    alert("add sucessfully....");
    Navigate('/view')

  }


  const handleCheckboxchange = (e) => {
    const { value } = e.target
    setCourse((preCourses) => {
      if (preCourses.includes(value)) {
        return preCourses.filter((course) => course !== value)
      }
      else {
        return [...preCourses, value]
      }
    })
  }
  return (
    <div>
      <Header />

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 mt-5 mx-auto border p-5 shadow">
            <form onSubmit={handle}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={(e) => setname(e.target.value)} value={name} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="text" className="form-control" onChange={(e) => setemail(e.target.value)} value={email} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e) => setpassword(e.target.value)} value={password} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Gender</label><br></br>
                <input type="radio" className='form-label px-1 mx-1 rounded' onChange={(e) => setGender(e.target.value)} value="Male" checked={gender == "Male"} />Male <input type="radio" className='form-label px-2 mx-1 rounded' onChange={(e) => setGender(e.target.value)} value="Female" checked={gender == "Female"} />Female
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Course</label><br></br>
                <input type="checkbox" className='form-label px-1 mx-1  rounded' onChange={handleCheckboxchange} value="html" checked={course.includes("html")} />html
                <input type="checkbox" className='form-label px-1 mx-1  rounded ms-2' onChange={handleCheckboxchange} value="css" checked={course.includes("css")} /> css
                <input type="checkbox" className='form-label px-1 mx-1  rounded ms-2' onChange={handleCheckboxchange} value="bootstrap" checked={course.includes("bootstrap")} /> Bootstrap
                <input type="checkbox" className='form-label px-1 mx-1  rounded ms-2' onChange={handleCheckboxchange} value="js" checked={course.includes("js")} /> js
                <input type="checkbox" className='form-label px-1 mx-1  rounded ms-2' onChange={handleCheckboxchange} value="react js" checked={course.includes("react js")} /> react js
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label><br />
                <input type="date" className="form-label px-2 py-1 rounded" onChange={(e) => setDate(e.target.value)} value={date || ""} />
              </div>
              <div className="mb-3">
                <label className="form-label">Departments</label>
                <select name="" id="" className="form-control" onChange={(e) => setDepartment(e.target.value)} value={department || ""}>
                  <option value="">--- selected ---</option>
                  <option value="Front end Developer">Front end Developer</option>
                  <option value="back end Developer">Back end Developer</option>
                  <option value="Fullstack Developer">Fullstack Developer</option>
                  <option value="UI UX Designer">UI UX Designer</option>
                </select>
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
