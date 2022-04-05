import logo from './logo.svg';
import './App.css';
import React,{ useState} from 'react';

function App() {

 const [email,emailValid] =useState("");
 const [password,passwordValid] =useState("");

 const[emailErr,emailErrValue]= useState({});
  const[passwordErr,passwordErrValid]= useState({});

const  formValidation=()=>{
   const emailErr={};
   const passwordErr={};
   let isValid = true;

if (!email.includes("@")){
 emailErr.emailL="email is invalid";
  isValid=false;
}
if(password.length<8){
  passwordErr.passwordL="password contain 8 charactersor more.";
  isValid=false;
}
emailErrValue(emailErr);
passwordErrValid(passwordErr);
return isValid;
} 
const onSubmitValue =(e)=>{
  e.preventDefault();
  const invalid =formValidation();
} 
const btnClick=()=>{
  if(email.includes("@") && password.length>8 ){
    alert("succesfully submit.")
  }
  else{
    alert("error")
  }

}

 
   
  return (
    <div className="App">
     <form onSubmit={onSubmitValue}>
       <div className='email'>
         <label className='heading'
          >EMAIL</label>
         <br></br>
         <input type="text" value={email} 
          name="email"
          onChange={(e)=>{emailValid(e.target.value)}}
          /> 
          <div className='errors'>{emailErr.emailL}
</div>         
       </div>
       <div className='password' >
         <label className='heading' 
        >PASSWORD</label>
         <br></br>
         <input type="PASSWORD"  value={password} 
         name="password"
         onChange={(e)=>{passwordValid(e.target.value)}} />
         <div className='errors'>{passwordErr.passwordL}
</div>        
       </div>
       <button onClick={btnClick}>SUBMIT</button>
       </form>
    </div>
  );
}


     
     
export default App;
