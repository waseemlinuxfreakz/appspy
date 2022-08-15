import React from 'react';

import BlueLine from '../../../../assets/img/homepage/BlueLine.svg';
import TestiSlider from './TestimonilaCompo';


function OriginReviews() {
    return (
        <div className="originReview_area">
            <div className="section_title text-center ">
                <h2 className="fz64">See what our Customers Point of View, <br /> Passages from Origin Reviews.</h2>
            </div>
            <div className="originReview_container">
                <img src={BlueLine} alt="BlueLine" className='blue line' />
                <div className="originReview_inner_content">
                    <TestiSlider/>
                </div>
            </div>
        </div>
    );
}

export default OriginReviews;
