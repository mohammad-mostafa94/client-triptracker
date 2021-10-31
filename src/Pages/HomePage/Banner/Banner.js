import React from 'react';
import banner from '../../../image/banner.png';

const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                <p className="text-info fw-bold">Best resorts in your budget</p>
                <h1>Book the best resorts you can get with in your budget.</h1>
                <small className="d-block text-secondary my-3">For our 34th annual Readers’ Choice Awards survey, registered voters weighed in on their favorite resorts around the globe. As the world has begun to reopen and readjust, the results reflect the kinds of properties you longed to visit when you couldn’t travel and the ones you returned to first once you could. </small>
                <button className="btn btn-info my-3 text-white">Reserve A Resort</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={banner} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;