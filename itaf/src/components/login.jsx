import React from 'react';
import './style/login.css';
import './style/logo.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function LoginForm() {
  return (
    <div className="container col-md-4 text-center">
      <div className="heading">
       Sign In
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
        <input className="login-button" type="button" value="Sign In" onClick={click}/>
    
        <span className="forgot-password">
          <a href="#"> <h5>Forgot Password </h5> </a>
        </span>
      </form>
    </div>
  );
}
const click = ()=>
{
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(email);
  console.log(password);
}

export default LoginForm;
