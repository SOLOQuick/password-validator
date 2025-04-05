import React ,{ useState } from 'react';
import validator from 'validator';
import './Password.css'

const Password=()=> {
  const [errorMess, setErrorMess]=useState('');

  const validate=(props)=>{
    if (validator.isStrongPassword(props,{
       minLength:8,
       minLowercase:1,
       minUppercase:1,
       minNumbers:1,
       minSymbols:1})){
      setErrorMess('Is Strong Password');
    }
    else{
      setErrorMess('Is Not Strong Password');
    }
  };
  

  return (
    <div>
      <div >
        <div><h3>Welcome to,</h3></div>
        <div  className='header'><h1>PASSWORD -VALIDATION-APP</h1></div>
      </div>
      <div className='check'>
        <h2>Checking Password Strength</h2>
        <div>Enter password :- </div>
        <input  type="text" onChange={(pass)=>validate(pass.target.value)} />
        <p>{errorMess}</p>
      </div>
          
      <div className='footer'>
        <div><h5>Created by-</h5></div>
        <div><h4>SAKSHI SINGH</h4></div>
      </div>
      
    </div>
  );
}

export default Password;
