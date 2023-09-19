import React, { useEffect, useState } from 'react';
import './style/login.css';
import './style/logo.css';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function ViewForm() {
  const[email,setEmail] = useState("");
  
  useEffect(()=> {
      const findEmail = async ()=>{
      const userEmail = await axios.get('http://localhost:8092/automation-framework/api/v1/user/8');
      setEmail(userEmail.data.result.users.email);
    }
    findEmail();
  });
  return (
    <div className='container col-md-9 myDiv'>
    <Table striped>
    <thead>
    <th className='text-center'>@</th>
    <th className='text-center'>Name</th>
    <th className='text-center'>Email</th> 
    </thead>
<tbody>
<tr>
<td className='text-center'>1 </td>
<td className='text-center'>Pirathaban </td>
<td className='text-center'> {email} </td>
<td className='text-center'> <button className='btn btn-info'> Edit </button> </td>
<td className='text-center'><button className='btn btn-danger'> Delete </button></td>
</tr>

</tbody>
    </Table>
    </div>
   
  );
}
export default ViewForm;
