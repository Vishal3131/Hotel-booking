import React, { useEffect, useState } from 'react'
import Roomhome from './Roomhome';
import vishal1 from './image/vishal1.jpg'
import vishal2 from './image/vishal2.jpg'
import vishal3 from './image/vishal3.jpg'
import ssc from './image/ssc.jpg'
import Review from './Review';
import Footer from './Footer';
import { Link } from 'react-router-dom';


export default function Homepage() {

  const [selectimage, setselectimage] =useState(0)
  const [allimage, setAllimage] = useState([vishal1,vishal2,vishal3])

  useEffect(() => {
      setInterval(() => {
        setselectimage(selectimage => selectimage >= 2 ? 0: selectimage+1)
      },2000)
  },[])

  return (
    <div>
       
       <img width={1520} height={650} src={allimage[selectimage]} />
       <div style={{display:'flex'}}/>
       

   
       <div className="container availability-form">
      <div className="row">
        <div className="col-lg-12 bg-white shadow p-4 rounded">
         <h5 className="mb-4">Check Booking Availability</h5>
         <form>
        <div className="row align-items-end">
          <div className="col-lg-3 mb-3">
          <label className="form-label" style={{fontWeight:500}}>Check-in</label>
           <input type="date" className="form-control shadow-none" />
        </div>
        <div className="col-lg-3 mb-3">
          <label className="form-label" style={{fontWeight:500}}>Check-out</label>
           <input type="date" className="form-control shadow-none" />
        </div>
        <div className="col-lg-3 mb-3">
          <label className="form-label" style={{fontWeight:500}}>Adult</label>
          <select className="form-select shadow-none">
             <option selected>Open this select menu</option>
             <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </select>
         </div>
        <div className="col-lg-2 mb-3">
          <label className="form-label" style={{fontWeight:500}}>Children</label>
          <select className="form-select shadow-none">
             <option selected>Open this select menu</option>
             <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-1 mb-lg-3 mt-2">
          <button type="submit" className="btn btn-primary shadow-none custom-bg">Submit</button>
       </div>
     </div>
     </form>
    </div>
  </div>
 </div>

   {/* our rooms section */}
   <h2 class="mt-5 pt-4 mb-4 text-center fw-bold h-font">OUR  ROOMS</h2>
     <div class="container">
     <div className="row">
    <div className="col-lg-4 col-mb-6 my-3">
     <Roomhome img={vishal2}/>
    </div>

    <div className="col-lg-4 col-mb-6 my-3">
     <Roomhome img={vishal3}/>
    </div>

    <div className="col-lg-4 col-mb-6 my-3">
     <Roomhome img={vishal2}/>
    </div>
      <div class="col-lg-12 text-center mt-5">
        <Link to="Rooms" class="btn btn-sm btn-outline-dark rounded-0 fw-bold shadow-none">More Rooms..</Link>
        </div>

     </div>
     </div>
     
     
      {/* Review section */}

      <h2 class="mt-5 pt-4 mb-4 text-center fw-bold h-font">TESTIMONIALS</h2>
      

     
       
      <Review img={ssc}/>
    
      

      <Footer/>
  
      {/* Reach Us 
      <h2 class="mt-5 pt-4 mb-4 text-center fw-bold h-font">REACH US</h2>

      <div class="container">
       <div class="row">
       <div class="col-lg-8 col-md-8 p-4 mb-lg-0 mb-3 bg-white rounded">
       <iframe class= "w-100 rounded"  height="320px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984846.5361920561!2d74.51044926351398!3d18.984878996824108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1669278882745!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="col-lg-4 col-md-4">
     <div class="bg-white p-4 rounded mb-4">
      <h5> Call us</h5>
      <a href="tel: +919325175544" class="d-inline-block mb-2 text-decoration-none text-dark">
      <i class="bi bi-telephone-fill"></i> +919325175544
      </a>
      <br/>
      <a href="tel: +919325175544" class="d-inline-block text-decoration-none text-dark">
      <i class="bi bi-telephone-fill"></i> +919325175544
    </a>
    </div>
    <div class="bg-white p-4 rounded mb-4">
      <h5> Follow us</h5>
      <a href="#" class="d-inline-block mb-3">
      <span class="badge bg-light text-dark fs-6 p-2"> 
      <i class="bi bi-twitter me-1"></i>
        Twitter
      </span>
      </a>
      <br/>
      <a href="#" class="d-inline-block mb-3">
      <span class="badge bg-light text-dark fs-6 p-2"> 
      <i class="bi bi-facebook me-1"></i>
        Facebook
      </span>
      </a>
      <br/>
      <a href="#" class="d-inline-block">
      <span class="badge bg-light text-dark fs-6 p-2"> 
      <i class="bi bi-instagram me-1"></i>
        Instagram
      </span>
      </a>
      <br/>
    </div>
    </div>
   </div>
 </div>



 {/* Footer section *

 <h6 class="text-center bg-dark text-white p-3 m-0">Designed and Developed by vishal maulkar</h6>
*/}

   </div>



  )
}
