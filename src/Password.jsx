import React ,{ useState } from 'react';
import validator from 'validator';
import PasswordChecklist from "react-password-checklist";
import './Password.css';

const Password=()=> {
  const [errorMess, setErrorMess]=useState('');
  const [password, setPassword]=useState('');
  const [suggestion,setSuggestion]=useState([]);
  const validate=(props)=>{
    if (validator.isStrongPassword(props.password,{
       minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1})){
      setErrorMess('Is Strong Password');
    }else{
      setErrorMess('Is Not Strong Password');
    }};
  const pass=(event)=>{
    const newPass=event.target.value;
    setPassword(newPass);
    validate({password:newPass})};
  const randomPassword=()=>{
    const length=8;
    const charset='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789!@#$%^&*()-=_+[]{}\|;":,.<>/?`~';
    let retVal='';
    for (let i=0,n=charset.length;i<length;++i){
        retVal+=charset.charAt(Math.floor(Math.random()*n));
    }return retVal;
  };
  const suggestPass=()=>{
    const newSuggest=Array.from({length:5},()=>randomPassword());
    setSuggestion(newSuggest);
  };
  const copy=(text)=>{
    navigator.clipboard.writeText(text);
    alert('Password is copied to clipboard');
  };

  return (
    <div>
      <div >
        <div><h3>Welcome to,</h3></div>
        <div  className='header'><h1>PASSWORD -VALIDATION-APP</h1></div>
      </div>
      <ul>
        <li><div className='check'>
            <h2>Checking Password Strength</h2>
            <div>Enter password :- </div>
            <input  type="password" value={password} onChange={(pass)} style={{padding:'5px'}}/>
            <p>{errorMess}</p>
            <PasswordChecklist rules={[
              "capital","specialChar","minLength","lowercase","number"
            ]} minLength={8}
            value={password}/>
          </div></li>
        <li>
          <div className='suggest'>
            <button onClick={suggestPass}><h2>Suggest me Strong Password</h2></button><br/>
            {suggestion.length>0 && (<div ><h3>Suggested Password :-</h3><ul>{suggestion.map((suggest,index)=>(<li key={index}>{suggest}
              <button onClick={()=>copy(suggest)} style={{marginLeft:'30px',padding:'6px 10px'}}>Copy</button><br/><br/>
            </li>))}</ul></div>)}
          </div></li>
        </ul>
        <div className='footer'>
          <div><h5>Created by-</h5><h4>SAKSHI SINGH</h4></div>
        </div>
    </div>
)};
export default Password;


