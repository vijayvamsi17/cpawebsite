import React from "react";
import { NavLink } from "react-router-dom";

function RDBenefitCalculator(props) {

    return (
        <React.Fragment>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">R&amp;D Benefit Calculator</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><NavLink to="/" className="text-white">Home</NavLink></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">R&amp;D Benefit Calculator</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* Form Calculator Start */}
            <div className="container py-5">
                <form className="col-sm-6">
                    <div class="row mb-3">
                        <label for="employes" class="col-lg-6 col-form-label">Number of R&amp;D Employees:<span className="text-danger">*</span></label>
                        <div class="col-lg-6">
                            <input type="number" class="form-control" id="employes" placeholder="Number of R&D Employees" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="avgsalery" class="col-lg-6 col-form-label">Average Salary:<span className="text-danger">*</span></label>
                        <div class="col-lg-6">
                            <input type="number" class="form-control" id="avgsalery" placeholder="Average Salary" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="states" class="col-lg-6 col-form-label">State:<span className="text-danger">*</span></label>
                        <div class="col-lg-6">
                            <select class="form-select" id="states">
                                <option selected>Choose State</option>
                                <option value="1">Service 1</option>
                                <option value="2">Service 2</option>
                                <option value="3">Service 3</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <h4>Estimated R&D Tax Credits:</h4>
                    <div class="row mb-3">
                        <label for="grossfedccredit" class="col-lg-6 col-form-label">Gross Regular Federal Credit:</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="grossfedccredit" placeholder="0.00" disabled />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="grossstatecredit" class="col-lg-6 col-form-label">Gross Regular State Credit:</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="grossstatecredit" placeholder="0.00" disabled />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="totaltaxcredit" class="col-lg-6 col-form-label fw-bold">Total R&D Tax Credit:</label>
                        <div class="col-lg-6">
                            <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input type="number" class="form-control" id="totaltaxcredit" placeholder="0.00" disabled />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* Form Calculator End */}

        </React.Fragment>
    );
};

export default RDBenefitCalculator;