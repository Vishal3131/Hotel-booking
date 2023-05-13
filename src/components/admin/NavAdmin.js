import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTh,
  FaBars,
  FaUserAlt
}from "react-icons/fa";

export default function NavAdmin({children}) {

  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/Dashboard",
          name:"Dashboard",
          icon:<FaTh/>
      },
      {
          path:"/Admin_rooms",
          name:"Rooms",
          icon:<FaUserAlt/>
      },
      {
        path:"/Booked",
        name:"Booked",
        icon:<FaUserAlt/>
    },
    {
        path:"/Site_setting",
        name:"Site setting",
        icon:<FaUserAlt/>
    },
      {
          path:"/productList",
          name:"Product List",
          icon:<FaUserAlt/>
      }
  ]

  return (
    <div>
     
        <div className="containers my-5">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
   


    </div>
  )
}
