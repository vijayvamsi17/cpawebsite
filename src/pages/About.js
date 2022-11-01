import React from "react";
import { NavLink } from "react-router-dom";
import AboutDetailsPage from '../components/AboutDetails';

function AboutPage(props) {

    return (
        <React.Fragment>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><NavLink to="/" className="text-white">Home</NavLink></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            <AboutDetailsPage />
        </React.Fragment>
    );
};

export default AboutPage;