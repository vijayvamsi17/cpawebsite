import React from "react";
import { NavLink } from "react-router-dom";

function RDPayrolltaxCreditCalculator(props) {

    return (
        <React.Fragment>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">R&amp;D Payroll Tax Credit Calculator</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><NavLink to="/" className="text-white">Home</NavLink></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">R&amp;D Payroll Tax Credit Calculator</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            {/* Form Calculator Start */}
            <div className="container py-5">
                <form className="col-sm-6">
                    <div class="row mb-3">
                        <label for="employes" class="col-lg-6 col-form-label">Total Number of Employees</label>
                        <div class="col-lg-6">
                            <input type="number" class="form-control" id="employes" placeholder="Total Number of Employees" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="avgsalery" class="col-lg-6 col-form-label">Average Salary of Employees</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="avgsalery" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="employesengaged" class="col-lg-6 col-form-label">Total Number of Employees Engaged in R&D</label>
                        <div class="col-lg-6">
                            <input type="number" class="form-control" id="employesengaged" placeholder="Total Number of Employees Engaged in R&D" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="avgsaleryengaged" class="col-lg-6 col-form-label">Average Salary of Employees Engaged in R&D</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="avgsaleryengaged" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="pctavg" class="col-lg-6 col-form-label">Percentage of Time Average R&D Employee Spends on R&D Projects in a Year (1-100%)</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">%</div>
                                <input type="number" class="form-control" id="pctavg" placeholder="00" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="suppliesused" class="col-lg-6 col-form-label">Amount of Supplies Used in R&D</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="suppliesused" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="rdcontractors" class="col-lg-6 col-form-label">Amount Paid to R&D Contractors</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="rdcontractors" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100 py-3">Calculate</button>
                    </div>
                </form>
            </div>
            {/* Form Calculator End */}
        </React.Fragment>
    );
};

export default RDPayrolltaxCreditCalculator;