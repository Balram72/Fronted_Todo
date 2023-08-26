import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context, server } from '../main';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loader from '../components/Loader';

function ForgotPassword() {
  const [email,setEmail] = useState('')
  const {isAuthenticated,setIsAuthenticated,loading,setLoading} = useContext(Context);
  const submitHandler = async (e) =>{
    e.preventDefault();
    setLoading(true)
    try {
      const {data} = await axios.get(`${server}/users/forgotpassword`,{
          email
      },{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      console.log(data);

      toast.success(data.message) 
      setIsAuthenticated(true);
      setLoading(false)

    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false)
      setIsAuthenticated(false)
    }

  };

  if(isAuthenticated) return <Navigate to={'/login'} />

  return loading ? <Loader/> : (
    <div className='login'>
      <section>
        <center><h1>Forgot Password</h1></center><br/>
        <form onSubmit={submitHandler}>
          <input 
          type='email' 
          placeholder='Email' 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          required
          />
          <button disabled={loading} type='submit'>Sumit</button>
        </form>
      </section>
    </div>
    )
}

export default ForgotPassword