
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'


 const Home = () => {
  const navigate = useNavigate();
  
  const signUpPage = ()=>{
      navigate('/');
  }


  return (
    <div className='homepage'>
           <h1>Hello User...Your data stored in MongoDb(Database)</h1>
           <button className='button' onClick={signUpPage}>SignUp</button>
    </div>
  )
}

export default Home;