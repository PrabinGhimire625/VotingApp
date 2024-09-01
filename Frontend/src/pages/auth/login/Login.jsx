import React, { useEffect } from 'react';
import Form from '../Form';
import { STATUS } from '../../../globals/enumStatus/Status';
import { useNavigate } from 'react-router-dom';
import { loginUser, resetStatus } from '../../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);
  
  //handleLogin
  const handleLogin = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      alert("Successfully login to the system!")
      dispatch(resetStatus())
      navigate('/');
    } 
  }, [status, navigate, dispatch]);

  return (
    <>
      <Form type="login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
