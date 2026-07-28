import React from "react";

const JobApplication = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body p-4">
                            <h3 className="fw-bold text-center mb-4">
                                <i className="bi bi-briefcase-fill me-2 text-primary"></i>
                                Job Application
                            </h3>

                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Position</label>
                                    <select className="form-select">
                                        <option>Select Position</option>
                                        <option>Frontend Developer</option>
                                        <option>Backend Developer</option>
                                        <option>Full Stack Developer</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Resume</label>
                                    <input type="file" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Cover Letter</label>
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>

                                <button type="button" className="btn btn-primary w-100">
                                    <i className="bi bi-send-fill me-2"></i>
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>

                    <p className="text-center text-secondary small mt-3">
                        <i className="bi bi-lock me-1"></i>
                        This is a UI-only form
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobApplication;
 