import React from 'react'
import { Link } from 'react-router-dom';
import {BootstrapIcons,  Airplane } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light "style={{ position: "fixed", top: 0, width: "100%", zIndex: 1 }}>
         <div className="container-fluid">
         <Link className="navbar-brand" to="/">HOTEL</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <Link className="nav-link " aria-current="page" to="/">Home</Link>
          </li>
         <li className="nav-item">
         <Link className='nav-link' to="/Rooms">Rooms</Link>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="/"></a>
         </li>
         <li className="nav-item">
         <Link className='nav-link' to="/"></Link>
         </li>
      </ul> 
      <div class="d-flex">
      
      
     <button type="button" class="btn btn-outline-success shadow-none me-lg-3 me-2" data-bs-toggle="modal" data-bs-target="#loginModal"id="btn">
          login
       </button>
     <button type="button" class="btn btn-outline-success shadow-none" data-bs-toggle="modal" data-bs-target="#registerModal">
         Register
     </button>
     
    </div>
    </div>
 </div>
 </nav>

    

<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog">
    <div class="modal-content">
     <form action="/">
      <div class="modal-header">
        <h5 class="modal-title d-flex align-items-center">
        <i class={'bi bi-person-circle fs-3 me-2'}></i>    User login</h5>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    <div class="modal-body">
      <div class="mb-3">
     <label class="form-label">Email address</label>
    <input type="email" class="form-control shadow-none" required/>
   </div>
   <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="Password" class="form-control shadow-none" required/>
    </div>
        
    <div class="d-flex align-items-center justify-content-between mb-2">
     <button type="submit" class=" btn btn-dark shadow-none" >Login</button>
     <a href="/"class="text-secondary text-decoration-none">Forgot password?</a>
       </div>
      </div>
     </form>
    </div>
  </div>
   </div>
  
 <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
     <form  action="/" method="" >                                                     
      <div class="modal-header">
        <h5 class="modal-title d-flex align-items-center">
        <i class={"bi bi-person-lines-fill me-2"}></i> User Regisrtration</h5>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    <div class="modal-body">
    <span class="badge rounded-pill bg-light text-dark mb-3 text-wrap lh-base">
      Note:Your details must match with your ID.
      that will be required during check-in.
    </span>
    <div class="container-fluid">
       <div class="row">
        <div class="col-md-6 ps-0 mb-3">
        <label class="form-label">Name</label>
    <input name= "name" type="text" class="form-control shadow-none" required/>
    </div>
    <div class="col-md-6 p-0">
        <label class="form-label">Email</label>
    <input name="email" type="email" class="form-control shadow-none" required/>
    </div>
    <div class="col-md-12 p-0 mb-3">
        <label class="form-label">Address</label>
    <textarea name="address" class="form-control shadow-none" rows="1" required></textarea>
    </div>
    <div class="col-md-6 ps-0 mb-3">
        <label class="form-label">Phone Number</label>
    <input name="phonenum" type="number" class="form-control shadow-none" required/>
    </div>
    <div class="col-md-6 ps-0 mb-3">
        <label class="form-label">Pin code</label>
    <input name="pincode" type="number" class="form-control shadow-none" required/>
    </div>
     
    <div class="col-md-6 ps-0 mb-3">
        <label class="form-label">Password</label>
    <input name="pass" type="password" class="form-control shadow-none" required/>
    </div>
    <div class="col-md-6 p-0 mb-3">
        <label class="form-label">confirm Password</label>
    <input name="cpass" type="password" class="form-control shadow-none" required/>
    </div>
    </div>
    </div>

      <div class="text-center my-1">
      <button type="submit" class="btn btn-dark shadow-none" >Register</button>
   
       </div>
      </div>
     </form>
    </div>
  </div>
</div> 
    </div> 
  )
}
