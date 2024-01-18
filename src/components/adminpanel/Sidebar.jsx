import React, { useState } from 'react';
import './Sidebar.css';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

const Sidebar = () => {

  
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
        Registrations
       <ul>
       <a href="/Places">
        <li>Places</li></a>
        
       </ul>
       View
       <ul>
       <li><Link to="/PlaceView">Registered Places</Link></li>
       <a href="/HotelView"><li>Registered Hotels</li></a>
       <a href="/RestraView"><li>Registered Restaurant</li></a>
      </ul>
      
    </div>
  );
};

export default Sidebar;