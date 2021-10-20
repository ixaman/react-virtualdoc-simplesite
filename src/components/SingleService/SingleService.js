import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './SingleService.css';

const SingleService = (props) => {
    const {name,specialties, Description, image} = props.doctor;
    return (
        <div>
            <Header></Header>
            <h2 className="title my-5">Doctor Details Page</h2><hr />
                <div className="container my-5 py-5">
                    <div className="row full-container">
                        <div className="col-md-6">
                            <img className="img-fluid" src={image} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h2>{name}</h2>
                            <h3>{specialties}</h3>
                            <p>{Description}</p>
                            <br />
                            <div className="d-grid gap-2">
                                <Button variant="warning" size="lg">
                                    Take Appoinment
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleService;