import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
    <div className="banner-container ">
        <div className="">
            <div className="row d-flex banner align-items-center justify-content-center">
            <div className="col-md">
                <h1 className="title">
                Book Your Doctor Anytime
                </h1>
                <h3 className="title">Chose from worlds most reknowned Specialist</h3>
                <strong className="text-white text-center mt-3">
                Bringing your doctor doorstep !
                </strong><br />
                <button className="mt-3 about-btn">Book Now</button>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;