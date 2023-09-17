import React from 'react';
import './style/login.css';
import './style/logo.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function CreatePassword() {
  return (
    <div className="container col-md-4 text-center">
      <div className="heading">
       Create Your Password
      </div>
      <form action="" className="form">
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
        <input
          required
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Confirm Password"
        />
        <br/>
        <br/>
        <input className="login-button col-md-2" type="submit" value="Create" />
        </form>
    </div>
  );
}

export default CreatePassword;
