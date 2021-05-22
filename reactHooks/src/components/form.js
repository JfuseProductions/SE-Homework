import React,{useState} from 'react';
import Success from './success.js';
import Failure from './failure.js';
import './components.css';

const Form = (props) => {

  const user1 = 'admin'
    const pass1 = 'root'

  let [username,setUser] = React.useState('');
    let [password,setPassword] = React.useState('');
      let [validate,isValidated] = React.useState('');

    const handleLogin = (e) =>{

      e.preventDefault()

      if (username === user1 && password === pass1){
        isValidated( <Success user1={user1}/> )
      }

      else{
        isValidated(<Failure />)
      }

    }

    const userChange = (e) => setUser = setUser(e.target.value)
    const passChange = (e) => setPassword = setPassword(e.target.value)


  return (
    <div className='page'>

      <form onSubmit={handleLogin} class="ui form form-style">

        <label className='form-header'><h1 className='form-header'>Sign In</h1></label>
        <div className="fields">

          <div className="field">
            <label>Username</label>
            <input className='user-input'onChange={userChange} type="text" placeholder="Username"/>
          </div>

          <div className="field">
            <label>Password</label>
            <input onChange={passChange}type="password"/>
          </div>

        </div>
        <div className='btn-container'>
          <button id='btn' className="fluid ui button">Sign In</button>

        </div>

      </form>

      <div className='validate'>{validate}</div>
    </div>


  )
}

export default Form;
