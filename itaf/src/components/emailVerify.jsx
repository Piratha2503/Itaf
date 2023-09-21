import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Result } from 'antd';
import Failed from "./error";
import Success from "./success";
import { useParams } from "react-router-dom";

function VerifyEmail() {
  const currentURL = window.location.href;
  const token = currentURL.split('/').pop();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    axios.post(`http://localhost:8092/automation-framework/api/v1/user/${token}`, {}, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(Response => {
      if (Response.data.message === "Email Verification Success") {
        setComponent(<Success />);
      } else {
        setComponent(<Failed />);
      }
    });
  }, [token]);
console.log(token);
  return (
    <div>
      <div id='try'> <h1> {component}</h1> </div>
    </div>
  );
}

export default VerifyEmail;
