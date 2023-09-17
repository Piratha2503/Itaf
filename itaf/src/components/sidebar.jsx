import React from "react";
import './style/sidebar.css';

function sidebar() {
    return(<>
    
    <div className="sidebar">
      <a href="#home"><i className="fa fa-fw fa-home"></i> Home</a>
      <a href="#services"><i className="fa fa-fw fa-wrench"></i> Services</a>
      <a href="#clients"><i className="fa fa-fw fa-user"></i> Clients</a>
      <a href="#contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
    </div>
    </>) 
}

export default sidebar;