import React from 'react';
import './style/login.css';
import './style/logo.css';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function ViewForm() {
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
<td className='text-center'> Piratha250392@gmail.com</td>
<td className='text-center'> <button className='btn btn-info'> Edit </button> </td>
<td className='text-center'><button className='btn btn-danger'> Delete </button></td>
</tr>

</tbody>
    </Table>
    </div>
   
  );
}
export default ViewForm;
