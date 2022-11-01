import React from "react";

function ToolbarPage(props) {

    return (
        <div className="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-3">
                        <a className="text-body px-2" href="tel:+0123456789"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</a>
                        <a className="text-body px-2" href="mailto:info@example.com"><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</a>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-2">
                        <a className="text-body px-2" href="/">Terms</a>
                        <a className="text-body px-2" href="/">Privacy</a>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center">
                        <a className="btn btn-sm-square btn-outline-body me-1" href="/"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-sm-square btn-outline-body me-1" href="/"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-sm-square btn-outline-body me-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-sm-square btn-outline-body me-0" href="/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolbarPage;