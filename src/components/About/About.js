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
                <h1 className="title my-3">Our Mission</h1>
                <div className="container">
                    <div className=" row info-container">
                        <div className="col-md-6 p-5">
                            <h2 className="text">Virtual Doctor exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more.</h2><br />
                            <h5 className="text">We believe that everyone should have access to convenient, affordable, and high-quality care.</h5>
                            <h5  className="text"><br />
                            We are on a mission to change how healthcare is delivered in Bangladesh. We know how daunting getting access to the right care can be which is why we focus on turning a doctor visit into a delightful experience.
                            </h5><br />
                            <h5 className="text">
                            Our goal is to make the process intuitive for our patients and provide care where ever you are – in clinic or at-home.
                            </h5><br />
                        </div>
                        <div className="col-md-6 p-5">
                            <img className="img-fluid" src="https://serviceware-se.com/fileadmin/user_upload/healthcare-graphic.png" alt="" />
                        </div>
                    </div>
                </div>

                <h1 className="title my-5">Our Management Team</h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                            <img src="https://lighthouse.mq.edu.au/__data/assets/image/0004/917194/women-ceo-tile700x400.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Sylvana Quader Sinha</h5>
                                <small>FOUNDER, CHAIRMAN, & CEO</small>
                                <p className="card-text">I founded Praava because I saw a tremendous need for quality healthcare in Bangladesh. I believe positive, systemic change in Bangladesh’s health care sector is as necessary as it is possible.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://madamenoire.com/wp-content/uploads/sites/9/2018/04/doctor.jpg?strip=all&quality=80" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Dr. Simeen Majid Akhtar</h5>
                                <small>CHIEF MEDICAL OFFICER</small>
                                <p className="card-text">I am part of Praava’s team because I feel passionately about the need for quality in health care and patient satisfaction, and Praava’s focused vision and goal is about quality and excellence in all aspects of healthcare.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://glider.ai/content/uploads/sites/8/2017/10/glider-chief-technology-officer.png" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Keith de Alwis</h5>
                                <small>CHIEF TECHNOLOGY & PRODUCT OFFICER</small>
                                <p className="card-text">I am part of Praava’s team because I truly believe Praava lives and breathes a true patientcentric model of care, which has the opportunity to scale countrywide. </p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://ak.picdn.net/shutterstock/videos/11481326/thumb/1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Dr. Zaheed Husain, Ph.D.</h5>
                                <small>SENIOR DIRECTOR, CANCER DIAGNOSTICS</small>
                                <p className="card-text"> Dr. Zaheed Husain. Dr. Husain holds a PhD in Molecular Biology and Biochemistry from New York University. He is a renowned molecular biologist and former faculty.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;