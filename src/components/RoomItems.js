import React, { useEffect,useState } from 'react';

export default function RoomItems(props) {
  
 
  
  return (
    <>
      
      
    <div class="col-md-5 mb-lg-0 mb-md-0 mb-3">
      <img src={props.img} class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-5 px-lg-3 px-md-3 px-0">
      <h5 class="mb-3">{props.title} </h5>
      <div class="features mb-3">
            <h6 class="mb-1">Features</h6>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             {props.room}
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
        <div class="facilites mb-3">
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
           <div class="guests">
            <h6 class="mb-1">Guests</h6>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             {props.adult}
            </span>
            <span class="badge rounded-pill bg-light text-dark text-wrap">
             {props.child}
            </span>
           </div>
       </div>
   <div class="col-md-2 mt-lg-0 mt-md-0 mt-4 text-center">
     <h6 class="mb-4">{props.price}</h6>
     <button type="button" class="btn btn-sm w-100 btn btn-primary shadow-none mb-2" data-bs-toggle="modal" data-bs-target="#BookModal"id="btn">
          Book now
       </button>
      <a href="#" class="btn btn-sm w-100 btn-outline-dark shadow-none">More details</a>
    </div>
    
  
  {/* Booking Form */}

<div class="container-fluid">
   <div class="modal fade" id="BookModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
    <div class="modal-content">

   <form action="" id="">
   <div class="modal-header">
        <h5 class="modal-title d-flex align-items-center">
          <i class="bi bi-person-circle fs-3 me-2"></i> Booking Form</h5>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
        <div class="mb-3">
			<label for="name">Name</label>
			<input type="text" name="name" id="name" class="form-control" required/>
		</div>
		<div class="mb-3">
			<label for="contact">Contact no.</label>
			<input type="number" name="contact" id="contact" class="form-control"  required/>
		</div>
		<div class="mb-3">
			<label for="date_in">Check-in Date</label>
			<input type="date" name="date_in" id="date_in" class="form-control" required readonly/>
		</div>
		<div class="mb-3">
			<label for="date_in_time">Check-out Date</label>
			<input type="date" name="date_in_time" id="date_in_time" class="form-control"  required/>
		</div>
		<div class="mb-3">
			<label for="days">Days of Stay</label>
			<input type="number" min ="1" name="days" id="days" class="form-control" required readonly/>
		</div>
    <div class="align-self-end mt-3">
		 <button class="btn btn-primary  float-right book_now" type="submit">Book now</button>
			</div>
    </div>
	</form>
</div>
</div>
</div>
</div>
  

 </>
  )
}
