import React from "react";
import { NavLink } from "react-router-dom";
function RDPayrolltaxCreditCalculator(props) {

    return (
        <React.Fragment>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">ERTC Benefit Calculator</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><NavLink to="/" className="text-white">Home</NavLink></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">ERTC Benefit Calculator</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            {/* Form Calculator Start */}
            <div className="container py-5">
                <form className="col-sm-6">
                    <div class="row mb-3">
                        <label for="employes" class="col-lg-6 col-form-label">Number of Employees:</label>
                        <div class="col-lg-6">
                            <input type="number" class="form-control" id="employes" placeholder="Number of Employees" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="avgwage" class="col-lg-6 col-form-label">Average Wage Per Employee (Capped at $10k / quarter):</label>
                        <div class="col-lg-6">
                        <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="avgwage" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="relatedinv" class="col-lg-6 col-form-label">Less: Wages Paid to Related Individuals of 50% or Greater Owners:</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="relatedinv" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="wageclaimed" class="col-lg-6 col-form-label">Wages Already Claimed in Other Credits Listed Above:</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="wageclaimed" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="wagesearmarked" class="col-lg-6 col-form-label">Wages Earmarked for Second Draw PPP Forgiveness:</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="wagesearmarked" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="totalqualified" class="col-lg-6 col-form-label">Estimated Total Qualified Wages:</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="totalqualified" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row mb-3">
                        <label for="totalest" class="col-lg-6 col-form-label fw-bold">Total Estimated Credit on Wages (70%):</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="totalest" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
            {/* Form Calculator End */}
        </React.Fragment>
    );
};

export default RDPayrolltaxCreditCalculator;