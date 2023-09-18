import React from 'react';
import './style/login.css';
import './style/logo.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function LoginForm() {
  return (
    <div className="Mycontainer col-md-4 text-center">
      <div className="heading">
       Login
      </div>
      <form action="" className="form">
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <br/>
        <br/>
        <input
          required
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <br/>
        <br/>
        <input className="login-button" type="button" value="Login" onClick={click}/>
    
        <span className="forgot-password">
          <a href="#"> <h5>Forgot Password </h5> </a>
        </span>
      </form>
      <span className='passwordVal' id='validate'>  </span>
    </div>
  );
}
const click = async ()=>
{
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
 try {
  const details = {
    id:8,
    "contactNumber": "0774156255",
  "companyUserId": 1,
  "designationId": 1,
  email: email,
  status: "active"
  }

  //const loginPost = await axios.post('http://localhost:8092/automation-framework/api/v1/user/login',details);
  //document.getElementById('validate').innerHTML = loginPost.data.message;
  
  //const loginGet = await axios.get('http://localhost:8092/automation-framework/api/v1/designation/user/1');
  //console.log(JSON.stringify(loginGet.data.result));

  //const loginDelete = await axios.delete('http://localhost:8092/automation-framework/api/v1/user/8');
  //console.log(loginDelete.data.status);

  //const loginPut = await axios.put('http://localhost:8092/automation-framework/api/v1/user',details);
  //console.log(loginPut.data.status);

 } catch (error) {
  console.error(error)
 }
}

export default LoginForm;
