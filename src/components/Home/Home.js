import React from 'react';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    const [doctors] = useServices();
    const newDoctors = doctors.slice(0,6)
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1 className="mt-5 text-primary">Our Specialists</h1><br />
            <div className="service mb-5">
                {
                    newDoctors.map(doctor => <Service
                        key = {doctor.doc_id}
                        doctor = {doctor}
                    ></Service> )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;