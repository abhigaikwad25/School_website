import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/aboutUs.css'

const AboutUs = () => {
    const aboutData = {
        history: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
        vision: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
        mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
        principalMessage: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
        infrastructure: [
            "State-of-the-art science and computer labs",
            "Spacious and well-equipped classrooms",
            "Library with a vast collection of books and digital resources",
            "Sports facilities including a playground, gymnasium, and swimming pool"
        ]
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 mainheading">About Us</h1>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card text-white bg-primary h-100">
                        <div className="card-body ml-0">
                            <h2 className="card-title">History</h2>
                            <p className="card-text">{aboutData.history}</p>
                            <a href="#" className="btn btn-light">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text-white bg-secondary h-100">
                        <div className="card-body">
                            <h2 className="card-title">Vision</h2>
                            <p className="card-text">{aboutData.vision}</p>
                            <a href="#" className="btn btn-light">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text-white bg-success h-100">
                        <div className="card-body">
                            <h2 className="card-title">Mission</h2>
                            <p className="card-text">{aboutData.mission}</p>
                            <a href="#" className="btn btn-light">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <h2 className="card-title">Principal's Message</h2>
                            <p className="card-text">{aboutData.principalMessage}</p>
                            <a href="#" className="btn btn-light">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card text-white bg-info mt-4">
                <div className="card-body">
                    <h2 className="card-title">Infrastructure and Facilities</h2>
                    <ul className="list-unstyled">
                        {aboutData.infrastructure.map((facility, index) => (
                            <li key={index} className="mb-2">
                                <i className="bi bi-check-circle-fill me-2 "></i>{facility}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
