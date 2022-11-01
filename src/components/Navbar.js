import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/icons/icon-1.png';

function NavbarPage(props) {

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="text-primary m-0"><img className="me-3" src={logo} alt="Icon"></img>Logo</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to="/" className="nav-item nav-link" activeclassname="active" end>Home</NavLink>
                    <NavLink to="/aboutus" className="nav-item nav-link" activeclassname="active">About</NavLink>
                    <div className="nav-item dropdown">
                        <NavLink to="/software" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Software</NavLink>
                        <div className="dropdown-menu border-0 m-0">
                            <NavLink to="/software/rdbenefitcalculator" className="dropdown-item">R&amp;D Benefit Calculator</NavLink>
                            <NavLink to="/software/rdpayrolltaxcreditcalculator" className="dropdown-item">R&amp;D Payroll Tax Credit Calculator</NavLink>
                            {/* <NavLink to="/software/costsegregationsavings" className="dropdown-item">Cost Segregation Savings Calculator</NavLink> */}
                            {/* <NavLink to="/software/randd" className="dropdown-item">Residential Cost Segregator</NavLink> */}
                            {/* <NavLink to="/software/randd" className="dropdown-item">481(a) Adjustment Calculator</NavLink> */}
                            {/* <NavLink to="/software/randd" className="dropdown-item">Partial Disposition Calculator</NavLink> */}
                            <NavLink to="/software/ertcbenefitcalculator" className="dropdown-item">ERTC Benefit Calculator</NavLink>
                            {/* <NavLink to="/software/randd" className="dropdown-item">IC-DISC Calculator</NavLink> */}
                        </div>
                    </div>
                    <NavLink to="/contactus" className="nav-item nav-link" activeclassname="active">Contact</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavbarPage;