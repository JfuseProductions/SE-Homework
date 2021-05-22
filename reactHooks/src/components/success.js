import React from 'react';
import './components.css'
const Success = (props) => {

  return(
    <div className='success-container'>
      <h3 className='success-message'>Welcome Back {props.user1}!</h3>
    </div>
  )
}

export default Success;
