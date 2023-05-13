import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Roomhome(props) {

     

  return (
    <div>
       
    <div class= "card border-0 shadow" style= {{width:'350px', margin:'50'}} >
        <img src={props.img} />
      
        <div class="card-body">
         <h5 class="card-title">Simple Room Name</h5>
         <h6>₹2000 per night</h6>

          <div class="features mb-4">
            <h6 class="mb-1">Features</h6>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             2 Rooms
            </span>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             1 Bathroom
            </span>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             1 Balcony
            </span>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             3 Sofa
            </span>
            </div>
            <div class="facilites mb-4">
            <h6 class="mb-1">Facilities</h6>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             Wifi
            </span>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             Televison
            </span>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             AC
            </span>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             Room heater
            </span>
           </div>
           <div class="guests mb-4">
            <h6 class="mb-1">Guests</h6>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             5 Adult
            </span>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             4 Children
            </span>
           </div>
          <div class="rating mb-4">
           <h6 class="mb-1">Rating </h6>
           <span class="badge rounded-pill bg-light">
               <  i/>
           <i class="bi bi-star-fill text-warning">⭐⭐⭐</i>
           </span>
           </div>
            
          
            <div class="d-flex justify-content-evenly mb-2">
            <Link to="Rooms" class=" btn btn-sm btn btn-primary shadow-none" >Book Now</Link>
            <a href="#" class="btn btn-sm btn-outline-dark shadow-none" >More details</a>
           </div>
          </div>
         </div>
      </div>
         
     
  )
}
