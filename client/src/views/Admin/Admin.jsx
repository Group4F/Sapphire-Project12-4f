import React from 'react';
import NavBar from "../../components/NavBar/NavBar"
import Sidebar from "./Components/Sidebar"
import EditButtons from "./Components/EditButtons"
import Cards from "./Components/Cards"
import "./Admin.less"

function Admin() {
  console.log('Admin component rendered');
  return (
    <div className='container nav-padding'>
      <NavBar />
      <h1>Welcome Admin!</h1>
      <Sidebar/>
      
      {/* <div><Cards /></div>
      <div><Cards /></div>
      <div><Cards /></div> */}
    </div>
  );
}

export default Admin;
