import React from "react";

function ContactUs(props) {

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h4 className="section-title">Contact Us</h4>
                    <h1 className="display-5 mb-4">If You Have Any Query, Please Feel Free Contact Us</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="d-flex flex-column justify-content-between h-100">
                            <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                                    <i className="fa fa-map-marker-alt text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Address</p>
                                    <h3 className="mb-0">123 Street, New York, USA</h3>
                                </div>
                            </div>
                            <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                                    <i className="fa fa-phone-alt text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Call Us Now</p>
                                    <h3 className="mb-0">+012 345 6789</h3>
                                </div>
                            </div>
                            <div className="bg-light d-flex align-items-center w-100 p-4">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{ width: '55px', height: '55px' }}>
                                    <i className="fa fa-envelope-open text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Mail Us Now</p>
                                    <h3 className="mb-0">info@example.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <iframe title="contactaddress" class="w-100 mb-n2" style={{height: '450px'}}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;