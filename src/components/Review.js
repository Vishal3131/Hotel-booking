import React from 'react'
import './Review.css';
import shivrajphoto from './image/shivrajphoto.png';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



export default function Review(props) {
  

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
     >

     <div class="row">
       <div class="column">
       <SwiperSlide>
      
         <div class= "card border-0 shadow" style= {{width:'500px',height:'395px', margin:'auto'}} >
        <div className='SwiperSlide'>
        <div className='Swiper-wrapper'>
        <div className='container'>
          <div className='swppper-client-msg'>
            <p>
             This is amiazing website and good also<br/>
             i have multiple times used this website.<br/>
              user-friendly website.
            </p>
            <div className='star'> 
              <p>
              ⭐⭐⭐
              </p>
            <div className='swipper-client-data grid '>
            <figure>
               <img src={props.img}/>
               </figure>
               <div className='client-data-details'>
                    <p>
                      <h5>vishal maulkar</h5>
                    </p>
                 </div>
               </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
       </SwiperSlide>
        </div>
        </div>
        
       
        
        
        <SwiperSlide>
      
      <div class= "card border-0 shadow" style= {{width:'500px',height:'420px', margin:'auto'}} >
     <div className='SwiperSlide'>
     <div className='Swiper-wrapper'>
     <div className='container'>
       <div className='swppper-client-msg'>
         <p>
          This is amiazing website and good also<br/>
          i have multiple times used this website.<br/>
           user-friendly website.
         </p>
         <div className='star'> 
           <p>
            ⭐⭐⭐⭐
           </p>
         <div className='swipper-client-data grid '>
         <figure>
            <img src={shivrajphoto}/>
            </figure>
            <div className='client-data-details'>
                 <p>
                   <h5>shivraj tanpure</h5>
                 </p>
              </div>
            </div>
         </div>
       </div>
       </div>
     </div>
     </div>
     </div>
    </SwiperSlide>
     
     
        </Swiper>
        
      
      
    
    
     </div>
     
  )
}
