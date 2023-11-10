import React from 'react';
import NavBar from "../../components/NavBar/NavBar"
import "./Admin.less"

function Admin() {
  console.log('Admin component rendered');
  return (
    <div className='container nav-padding'>
      <NavBar />
      <div > Welcome Admin !! </div>
    </div>
  );
}

export default Admin;