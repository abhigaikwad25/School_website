import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/academics.css'; // Optional: Add your custom styles here

const Academics = () => {
    const [activeTab, setActiveTab] = useState('primary');

    const curriculumData = {
        primary: [
            'English',
            'Mathematics',
            'Science',
            'Social Studies',
            'Art',
            'Physical Education'
        ],
        secondary: [
            'English',
            'Mathematics',
            'Science (Physics, Chemistry, Biology)',
            'Social Studies',
            'Computer Science',
            'Physical Education',
            'Art'
        ],
        seniorSecondaryScience: [
            'Physics',
            'Chemistry',
            'Biology',
            'Mathematics',
            'Computer Science',
            'English'
        ],
        seniorSecondaryCommerce: [
            'Accountancy',
            'Business Studies',
            'Economics',
            'Mathematics',
            'English'
        ]
    };

    const teachingMethodologies = "We use a blend of traditional and modern teaching techniques to cater to different learning styles.";
    const educationalResources = "Digital classrooms, interactive learning modules, and access to online educational platforms.";

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 academicheading">Curriculum Overview</h1>
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'primary' ? 'active' : ''}`}
                        onClick={() => setActiveTab('primary')}
                    >
                        Primary (Grades 1-5)
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'secondary' ? 'active' : ''}`}
                        onClick={() => setActiveTab('secondary')}
                    >
                        Secondary (Grades 6-10)
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'seniorSecondaryScience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('seniorSecondaryScience')}
                    >
                        Senior Secondary Science (Grades 11-12)
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'seniorSecondaryCommerce' ? 'active' : ''}`}
                        onClick={() => setActiveTab('seniorSecondaryCommerce')}
                    >
                        Senior Secondary Commerce (Grades 11-12)
                    </button>
                </li>
            </ul>
            <div className="tab-content px-5">
                <div className={`tab-pane fade ${activeTab === 'primary' ? 'show active' : ''}`}>
                    <h2 className='subheading'>Academic</h2>
                    <ul>
                        {curriculumData.primary.map((subject, index) => (
                            <li className="bi bi-check-circle-fill me-2" key={index}> {subject}</li>
                        ))}
                    </ul>
                </div>
                <div className={`tab-pane fade ${activeTab === 'secondary' ? 'show active' : ''}`}>
                    <h2 className='subheading'>Secondary Curriculum</h2>
                    <ul>
                        {curriculumData.secondary.map((subject, index) => (
                            <li className="bi bi-check-circle-fill me-2" key={index}> {subject}</li>
                        ))}
                    </ul>
                </div>
                <div className={`tab-pane fade ${activeTab === 'seniorSecondaryScience' ? 'show active' : ''}`}>
                    <h2 className='subheading'>Senior Secondary Science Curriculum</h2>
                    <ul>
                        {curriculumData.seniorSecondaryScience.map((subject, index) => (
                            <li className="bi bi-check-circle-fill me-2" key={index}> {subject}</li>
                        ))}
                    </ul>
                </div>
                <div className={`tab-pane fade ${activeTab === 'seniorSecondaryCommerce' ? 'show active' : ''}`}>
                    <h2 className='subheading'>Senior Secondary Commerce Curriculum</h2>
                    <ul>
                        {curriculumData.seniorSecondaryCommerce.map((subject, index) => (
                            <li className="bi bi-check-circle-fill me-2" key={index}> {subject}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <div className="mt-5">
                <h2>Teaching Methodologies</h2>
                <p>{teachingMethodologies}</p>
            </div>
            <div className="mt-4">
                <h2>Educational Resources</h2>
                <p>{educationalResources}</p>
            </div> */}
            <div className='aca-cards d-flex justify-content-evenly mt-5'>
                <div class="aca-card  m-4">
                    <div class="heading">
                        <h2>Teaching Methodologies</h2>

                    </div>
                    <div>
                        <p>{teachingMethodologies}</p>
                    </div>
                </div>
                <div class="aca-card  m-4">
                    <div class="heading">
                    <h2>Educational Resources</h2>
                    

                    </div>
                    <div>
                    <p>{educationalResources}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;
