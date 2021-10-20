import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {doc_id, name, specialties, Description, image} = props.doctor;
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
                    
                    <Link to={`/appoinment/${doc_id}`}>
                    <button className="btn btn-warning mb-3">Make Appoinment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;