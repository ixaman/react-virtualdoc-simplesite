import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <div className="col-md">
                        <h1 className="title">
                        WE ARE BUILDING A HEALTHCARE
                        </h1>
                        <h1 className="title">SYSTEM AROUND YOU</h1>
                    </div>
                </div>
                <h1 className="title">Our Mission</h1>
                <div className="container">
                    <div className="row info-container">
                        <div className="col-md-6 info-size">
                            <h2>Virtual Doctor exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more.</h2>
                            <p>We believe that everyone should have access to convenient, affordable, and high-quality care.</p>
                            <p>
                            We are on a mission to change how healthcare is delivered in Bangladesh. We know how daunting getting access to the right care can be which is why we focus on turning a doctor visit into a delightful experience.
                            </p>
                            <p>
                            Our goal is to make the process intuitive for our patients and provide care where ever you are – in clinic or at-home.
                            </p>
                        </div>
                        <div className="col-md-6 image-size">
                            <img src="https://www.adventisthealth.org/cms/thumbnails/00/1100x506/images/blog/200982_VirtualVisitFaceBookPost.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;