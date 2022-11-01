import React from "react";

function AboutDetailsPage(props) {

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="section-title">Why Choose Us!</h4>
                        <h1 className="display-5 mb-4">Why You Should Trust Us? Learn More About Us!</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="d-flex align-items-start">
                                    <img className="flex-shrink-0" src="./assets/img/icons/icon-2.png" alt="Icon"></img>
                                    <div className="ms-4">
                                        <h3>About Us</h3>
                                        <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start">
                                    <img className="flex-shrink-0" src="./assets/img/icons/icon-3.png" alt="Icon"></img>
                                    <div className="ms-4">
                                        <h3>Mission</h3>
                                        <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start">
                                    <img className="flex-shrink-0" src="./assets/img/icons/icon-4.png" alt="Icon"></img>
                                    <div className="ms-4">
                                        <h3>Vision</h3>
                                        <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-img">
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" alt=""></img>
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1611&q=80" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDetailsPage;