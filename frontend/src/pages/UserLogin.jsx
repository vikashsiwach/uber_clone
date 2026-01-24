import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e)=> {
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    console.log(userData);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
       <img className='w-16 mb-10' src="https://imgs.search.brave.com/A_wNAU9eR188BuAPpg8wemrqXHFWxWnQUdh4scN1Ko0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/aGlzdG9yeS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDYvVWJlci1Mb2dv/LTIwMTYtMTAyNHg1/NzYucG5n" alt="" />
        <form onSubmit= {(e)=>{
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's is your Email</h3>
          <input
          required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className= 'bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
          type="email"
          placeholder='email@example.com' />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
          required
          value={password}
          onChange= {(e) =>{
            setPassword(e.target.value)
          }}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          type="Password"
          placeholder='Password' />
          <button className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Login</button>
        </form>
        <p className='text-center mt-3'>New Here? <Link className=' px-1 text-blue-600' to='/signup'>Create New Account</Link></p>
      </div>
      <div>
        <Link className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' to='/captain-login'>Login as Rider</Link>
      </div>
    </div>
  )
}

export default UserLogin
