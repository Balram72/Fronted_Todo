import React, { useContext, useEffect} from 'react'
import { Context } from '../main';
import { Navigate } from 'react-router-dom';
import  '../styles/profile.scss'
function Profile() {
  const {isAuthenticated,users,setUsers} = useContext(Context);
  if(!isAuthenticated) return <Navigate to={'/login'} />

  useEffect(() => {
    setUsers(users)
  }, []);

  return (
      <div className='profile'>
        <p className='p1'>Name:- <b>{users.name}</b></p>
        <p>Email:- {users.email}</p>
      </div>
    )
}

export default Profile