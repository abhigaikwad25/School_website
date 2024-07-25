import React from 'react';
import img_1 from '../assets/activity/music.jpeg';
import img_2 from '../assets/activity/dance.jpeg';
import img_3 from '../assets/activity/drama.jpeg';
import img_4 from '../assets/activity/art.jpeg';
import img_5 from '../assets/activity/sports.jpeg';
import img_6 from '../assets/activity/robotics.jpeg';
import img_7 from '../assets/activity/debate_club.jpeg';
import img_8 from '../assets/activity/science_club.jpeg';

import awardimg_1 from '../assets/student/img_1.jpeg'
import awardimg_2 from '../assets/student/img_2.jpeg'
import awardimg_3 from '../assets/student/img_3.jpeg'

import councilimg_1 from '../assets/std_council/img_1.jpeg'
import councilimg_2 from '../assets/std_council/img_2.jpeg'
import councilimg_3 from '../assets/std_council/img_3.jpeg'
import '../css/student.css';

const achievements = [
    {
        text: "John Smith - National Level Math Olympiad Winner",
        imgUrl: awardimg_1
    },
    {
        text: "Sarah Lee - Gold Medalist in State Swimming Championship",
        imgUrl: awardimg_3
    },
    {
        text: "Tech Innovators Club - Winners of Inter-School Robotics Competition",
        imgUrl:awardimg_2
    }
];

const studentCouncil = [
    {
        role: "President",
        name: "Amy Parker",
        grade: "Grade 12",
        imgUrl: councilimg_1,
    },
    {
        role: "Vice President",
        name: "Rajiv Mehta",
        grade: "Grade 11",
        imgUrl: councilimg_2
    },
    {
        role: "Secretary",
        name: "Lisa Wong",
        grade: "Grade 10",
        imgUrl: councilimg_3
    }
];

function Student() {
    const activities = [
        {
            activity_name: 'Music',
            imgUrl: img_1,
        },
        {
            activity_name: 'Dance',
            imgUrl: img_2,
        },
        {
            activity_name: 'Drama',
            imgUrl: img_3,
        },
        {
            activity_name: 'Art',
            imgUrl: img_4,
        },
        {
            activity_name: 'Sports',
            imgUrl: img_5,
        },
        {
            activity_name: 'Robotics',
            imgUrl: img_6,
        },
        {
            activity_name: 'Debate Club',
            imgUrl: img_7,
        },
        {
            activity_name: 'Science Club',
            imgUrl: img_8,
        },
    ];

    return (
        <>
            <div>
                <h1 className='studentheader py-5 d-flex justify-content-center'>Extracurricular Activities</h1>
                <div className="container">
                    <div className="row">
                        {activities.map((activity, index) => (
                            <div className="col-md-3 mb-4 h-80" key={index}>
                                <div className="stdcard">
                                    <img src={activity.imgUrl} alt={activity.activity_name} className="stdcard-img-top img-fluid rounded d-flex justify-content-center mt-5" />
                                    <div className="stdcard-body">
                                        <h5 className="stdcard-title studentheader d-flex align-item-center mt-2">{activity.activity_name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="text-center mb-5">
                    <h1 className="section-title studentheader py-5 d-flex justify-content-center">Achievements</h1>
                </div>
                <div className="row">
                    {achievements.map((achievement, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="achievement-card h-100">
                                <img src={achievement.imgUrl} alt={achievement.text} className="card-img-top" />
                                <div className="achievement-card-body">
                                    <p className="achievement-card-text">{achievement.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5 mb-4">
                    <h1 className="section-title studentheader py-5 d-flex justify-content-center">Student Council</h1>
                </div>
                <div className="row justify-content-center">
                    {studentCouncil.map((member, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="achievement-card h-100">
                                <img src={member.imgUrl} alt={member.name} className="card-img-top" />
                                <div className="achievement-card-body text-center">
                                    <h5 className="achievement-card-title">{member.role}</h5>
                                    <p className="achievement-card-text">{member.name}</p>
                                    <p className="achievement-card-text text-muted">{member.grade}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}

export default Student;
