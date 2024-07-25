import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/admissions.css'; // Import custom CSS for additional styling

const Admissions = () => {
    const admissionProcess = "Admission forms are available for download. Submit the completed form along with required documents at the school office.";
    const admissionCriteria = "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.";
    const importantDates = [
        "Admission Form Availability: March 1st",
        "Last Date for Submission: March 31st",
        "Entrance Test: April 15th",
        "Announcement of Results: April 30th"
    ];

    return (
        <div className="container my-5 ">
            <h1 className="text-center mb-4 admissionheading">Admissions</h1>
            
            <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                    Admission Process
                </div>
                <div className="card-body">
                    <p>{admissionProcess}</p>
                    <button><i class="bi bi-download"></i>  Download</button>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-header bg-success text-white">
                    Admission Criteria
                </div>
                <div className="card-body">
                    <p>{admissionCriteria}</p>
                </div>
            </div>

            <div className="card">
                <div className="card-header bg-info text-white">
                    Important Dates
                </div>
                <div className="card-body">
                    <ul className="list-unstyled">
                        {importantDates.map((date, index) => (
                            <li key={index} className="mb-2">
                                <i className="bi bi-calendar-event me-2"></i>{date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
