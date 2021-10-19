import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Packages = () => {
    return (
        <div>
            <Header></Header>
            <div className="container my-5">
                <h1>For Male</h1>
                <hr />
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                        <img src="https://www.c-r-y.org.uk/wp-content/uploads/2019/02/ECG.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Cardiac Screening</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button className="btn btn-warning">BOOK NOW</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://www.hazelhillfamilypractice.com/wp-content/uploads/Diabetes-Diabetic-Screening-General-Practice-Ballyhaunis-Doctor-GP-Mayo-Claremorris-Hazelhill-Family-Practice.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Diabetes Screening</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button className="btn btn-warning">BOOK NOW</button>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="card">
                        <img src="https://samitivej-prod-new-website.s3.ap-southeast-1.amazonaws.com/public/uploads/descriptions/9a92dff25ca4c71ce3bcf9449274720d.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Home Health Checkup</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button className="btn btn-warning">BOOK NOW</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://fixurhealth.com/storage/19/senior-citizen-health-package-male-by-fixurhealth.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Regular Health Checkup</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button className="btn btn-warning">BOOK NOW</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container my-5" >


            <h1>For Female</h1>
                <hr />

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                        <img src="https://sportssurgeryclinic.com/wp-content/uploads/2019/01/AdobeStock_75603373.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Cardiac Screening</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button className="btn btn-warning">BOOK NOW</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://images.medicinenet.com/images/article/main_image/glucose-tolerance-test.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Diabetes Screening</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button className="btn btn-warning">BOOK NOW</button>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="card">
                        <img src="https://58harleystreet.co.uk/wp-content/uploads/2014/05/full-female-health-checkup.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Home Health Checkup</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button className="btn btn-warning">BOOK NOW</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="http://www.sevenhillshospital.com/images/medium/executive-package-female.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Regular Health Checkup</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <button className="btn btn-warning">BOOK NOW</button>
                        </div>
                    </div>
                   
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Packages;