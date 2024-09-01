import React, { useEffect } from 'react'
import Form from '../Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser, resetStatus } from '../../../store/authSlice'
import { STATUS } from '../../../globals/enumStatus/Status'

const Register = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {status}=useSelector((state)=>state.auth)
  console.log("Status is : ",status)

  const handleReister=(data)=>{
    dispatch(registerUser(data))
  }

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      alert("Successfully register to the system!")
      dispatch(resetStatus())
      navigate('/login');
    } 
  }, [status, navigate, dispatch]);

  return (
    <>
    <Form type="register" onSubmit={handleReister}/>
    </>
  )
}

export default Register
