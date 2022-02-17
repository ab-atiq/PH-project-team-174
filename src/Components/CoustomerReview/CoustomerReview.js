import React from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./CoustomerReview.css";
import SwiperCore, {
  Pagination,Navigation, Autoplay
} from 'swiper';
import { Container } from 'react-bootstrap';
SwiperCore.use([Pagination,Navigation, Autoplay]);

const CoustomerReview = () => {
    return (
        <>
        <h2 className="text-center mt-5 fs-1 fw-bolder ">Our Team Member </h2>
       <Container fluid className="bg-light">

        
       <Swiper 
       autoplay={{ delay: 5000 }} 
       slidesPerView={3} 
       spaceBetween={30} 
       slidesPerGroup={3} 
       loop={true} 
       loopFillGroupWithBlank={false} 
       pagination={{
       "clickable": true,
       }} 
       navigation={false}
       breakpoints={{
         300:{
           width: 300,
           slidesPerView: 1,
           slidesPerGroup: 1,
         },
         576: {
           width: 576,
           slidesPerView: 2,
           slidesPerGroup: 2,
         },
         768: {
           width: 768,
           slidesPerView: 2,
           slidesPerGroup: 2,
         }
       }}
       className="container mx-auto my-5  py-5">

            <div className="container">
              <div className="row">
              <SwiperSlide className="mb-4">
         <div>
           <div className="customer-img-div ">
             <img className='mx-auto' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" id="customer-img"/>
           </div>
           <div>
            
             <h4>Tom Hanks</h4>
             <h6 style={{color: '#7161ce'}}>Front End Developer</h6>
           </div>
         </div>
     </SwiperSlide>
     <SwiperSlide className="mb-4">
         <div>
           <div className="customer-img-div">
             <img className='mx-auto' src="https://p2.piqsels.com/preview/876/356/902/boy-businessman-close-up-eyes.jpg" alt="" id="customer-img"/>
           </div>
           <div>
             <h4>Will Smith</h4>
             <h6 style={{color: '#7161ce'}}>Back End Developer</h6>
           </div>
         </div>
     </SwiperSlide>
     <SwiperSlide className="mb-4">
         <div>
           <div className="customer-img-div">
             <img className='mx-auto' src="https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOnsibCI6/IjU1MSIsImgiOiI4MDAi/fX0sImlkIjoiaTcxNTk4/NjgiLCJmIjoianBnIn0;.jpg" alt="" id="customer-img"/>
           </div>
           <div>
            
             <h4>Tim Roxet</h4>
             <h6 style={{color: '#7161ce'}}>UI/UX Developer</h6>
           </div>
         </div>
     </SwiperSlide>
     <SwiperSlide className="mb-4">
         <div>
           <div className="customer-img-div">
             <img className='mx-auto' src="https://i.pinimg.com/736x/29/12/d1/2912d1ba7094c8a9ee48455e3be1b002.jpg" alt="" id="customer-img"/>
           </div>
           <div>
             <h4>Millie Brown</h4>
             <h6 style={{color: '#7161ce'}}> Influencer & Rechercher </h6>
           </div>
         </div>
     </SwiperSlide>
     <SwiperSlide className="mb-4">
         <div>
           <div className="customer-img-div">
             <img className='mx-auto' src="https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOiIzMjAi/fSwiaWQiOiJpMTI1OTM1/MiIsImYiOiJqcGcifQ;;.jpg" alt="" id="customer-img"/>
           </div>
           <div>
            
             <h4>Emily Hanlks</h4>
             <h6 style={{color: '#7161ce'}}>Marketing Manager</h6>
           </div>
         </div>
     </SwiperSlide>
     <SwiperSlide className="mb-4">
         <div>
           <div className="customer-img-div">
             <img className='mx-auto' src="https://stylesatlife.com/wp-content/uploads/2021/09/Jennifer-Lawrence-mole-on-face.jpg.webp" alt="" id="customer-img"/>
           </div>
           <div>
            
             <h4>Emma Watson</h4>
             <h6 style={{color: '#7161ce'}}> CEO </h6>
           </div>
         </div>
     </SwiperSlide>
     
              </div>
     </div>
     
     </Swiper>
       </Container>
       <div className="container">
            <div class="row">
                <div class="g-3 d-flex justify-content-start align-items-center text-left col-lg-3 col-md-3 col-sm-6 col-12">
                <i class="fas fa-shipping-fast"></i>
                    {/* <FontAwesomeIcon className="icon" icon={faShippingfast} /> */}
                    <div class="ps-3"><h5 class="my-1">Free Shipping</h5><p class="my-1">Free Shipping Inside Dhaka</p>
                    </div></div>
                    <div class="g-3 d-flex justify-content-start align-items-center text-left col-lg-3 col-md-3 col-sm-6 col-12">
                    <i class="fas fa-headset"></i>
                    <div class="ps-3"><h5 class="my-1">24/7 Support</h5><p class="my-1">Find The Best Range Of Organic Product</p>
                    </div></div>
                    <div class="g-3 d-flex justify-content-start align-items-center text-left col-lg-3 col-md-3 col-sm-6 col-12">
                    <i class="far fa-credit-card"></i>
                    <div class="ps-3"><h5 class="my-1">Safe Payment</h5><p class="my-1">Free Shipping When Spent 10000TK</p>
                    </div></div>
                    <div class="g-3 d-flex justify-content-start align-items-center text-left col-lg-3 col-md-3 col-sm-6 col-12">
                    <i class="fas fa-dollar-sign"></i>
                    <div class="ps-3"><h5 class="my-1">Cashback Offers</h5><p class="my-1">Get Cashback On Hot Products</p>
                        </div></div>
                </div>
            </div>
       </>
    );
};

export default CoustomerReview;