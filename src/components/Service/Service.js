import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, specialties, Description, image} = props.doctor;
    return (
        <div className="container">
            <div className="single-cart">
                <div className="img-div">
                    <img  className="img-fluid image-size"  src={image} alt="" />
                </div>
                <br />
                <div>
                    <h3>{name}</h3>
                    <h4 className="details">{specialties}</h4>
                    <p>{Description}</p>
                    
                    <button className="btn btn-warning mb-3">Make Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;