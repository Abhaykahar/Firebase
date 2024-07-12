import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleAuthProvider } from '../firebaseconfig'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const handleSubmit = async() =>{
        let res = await signInWithPopup(auth,googleAuthProvider);
        localStorage.setItem('token',res.user.accessToken);
        navigate('/add');
    }
  return (
    <div align="center" className='mt-5'>
      <h1>Google authetication</h1>
      <button className='btn btn-dark mt-5' onClick={()=> handleSubmit()}>Google</button>
    </div>
  )
}

export default Login
