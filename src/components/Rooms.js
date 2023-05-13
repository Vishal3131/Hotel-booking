import React from 'react'
import vishal2 from './image/vishal2.jpg';
import vishal3 from './image/vishal3.jpg';
import RoomItems from './RoomItems';
import { useState } from 'react';

export default function Rooms() {
 
  return (
    <div>
      
   <div className="my-5 px-4">
       <h2 className="fw-bold h-font text-center "> OUR ROOMS</h2>
     <div className="h-line bg-dark"></div>
  </div>

  <div className="container">
    <div class="row">


  <div className='col-lg-3 col-md-12 mb-lg-0 mb-4'>
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded shadow">
      <div class="container-fluid flex-lg-column align-items-stretch">
    <h4 class="mt-2">FILTERS</h4>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#filterDropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse align-items-stretch flex-column mt-2" id="filterDropdown">
      <div class="border bg-light p-3 rounded mb-3">
       <h5 class="mb-3" >check availability</h5>
       <label class="form-label" style={{fontsize: '15px'}}>Check-in</label>
         <input type="date" class="form-control shadow-none mb-3"/>
         <label class="form-label" style={{fontsize: '15px'}}>Check-out</label>
         <input type="date" class="form-control shadow-none mb-3"/>
      </div>
     <div class="border bg-light p-3 rounded mb-3">
       
    <div class="border bg-light p-3 rounded mb-3">
       <h5 class="mb-3" style={{fontsize: '18px'}}>GUESTS</h5>
       <div class="d-flex">
        <div class="me-3">
        <label class="form-label" style={{fontsize: '15px'}} onChange={(event) => {
          
           }}>     Adult </label>
        <input type="number" class="form-control shadow-none mb-3"/>
        </div>
      <div>
      <label class="form-label" style={{fontsize: '15px'}}>Children</label>
      <input type="number" class="form-control shadow-none mb-3"/>
        </div>
       </div>
      
     </div>
    </div>
  </div>
  </div>
  </nav>
</div>

<div class="col-lg-9 col-md-12 px-4 my-3">

  <div className="card mb-4 border-0 shadow">
   <div className="row g-0 p-3 align-items-center">
      <RoomItems img={vishal2} title="Simple Room" room="2 Rooms" adult="3 Adult" child="2 clildren" price="₹1500 per night" /> 
  </div>
 </div>

 <div className="card mb-4 border-0 shadow">
  <div className="row g-0 p-3 align-items-center">
     <RoomItems img={vishal3} title="Double Room" room="3 Rooms" adult="5 Adult" child="4 clildren" price="₹2000 per night"/> 
 </div>
</div>

<div className="card mb-4 border-0 shadow">
  <div className="row g-0 p-3 align-items-center">
     <RoomItems img={vishal2} title="Luxery Room" room="4 Rooms" adult="8 Adult" child="6 clildren" price="₹3000 per night"/> 
 </div>
</div>

 </div>

    


 </div>
 </div>

 

    </div>
  )
}
