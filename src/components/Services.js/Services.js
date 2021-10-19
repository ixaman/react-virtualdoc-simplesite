import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect( ()=> {
        fetch('./doctordata.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="service my-5">
                {
                    doctors.map(doctor => <Service
                        key = {doctor.doc_id}
                        doctor = {doctor}
                    ></Service>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;