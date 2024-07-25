import React from 'react'
import '../css/faculty.css'
import Logo from '../assets/school.jpg';
import img_1 from '../assets/profile/img_1.jpeg'
import img_2 from '../assets/profile/img_2.jpeg'
import img_3 from '../assets/profile/img_3.jpeg'
import img_4 from '../assets/profile/img_4.jpeg'
import img_5 from '../assets/profile/img_5.jpeg'
import img_6 from '../assets/profile/img_6.jpeg'

function Faculty() {
    const facultydata = [
        {
            id: '1',
            name: 'John Smith',
            info: 'Principal, M.Ed, 20 years of experience in educational administration.',
            imgurl: img_1,
        },
        {
            id: '2',
            name: 'Jane Smith',
            info: 'Vice Principal, M.Sc. in Physics, 15 years of teaching experience.',
            imgurl: img_2,
        },
        {
            id: '3',
            name: 'Emily Johnson',
            info: 'English Teacher, M.A. in English, 10 years of teaching experience.',
            imgurl: img_3,
        },
        {
            id: '4',
            name: 'Michael Brown',
            info: 'Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.',
            imgurl: img_4,
        },
        {
            id: '5',
            name: 'Sophia Davis',
            info: 'Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.',
            imgurl: img_5,
        },
        {
            id: '1',
            name: 'David Wilson',
            info: 'Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.',
            imgurl: img_6,
        },
    ]

    return (
        <>
        
        <div className="container ">
        <h1 className='facultyheading d-flex mt-5 justify-content-center'>Our Faculty</h1>
            <div className="row ">
                {facultydata.map((faculty, index) => (
                    <div className="col-md-4 d-flex mt-5 justify-content-center"  key={index}>
                        <div className="fcard">
                            <img
                                className="facultyimg img-fluid rounded"
                                src={faculty.imgurl}
                                style={{ width: '175px', borderRadius: '15px' }}
                                alt={faculty.name}
                            />
                            <div className="fcard-details">
                                <a className="text-title ">{faculty.name}</a>
                                <p className="text-body">{faculty.info}</p>
                            </div>
                            <button className="fcard-button">More info</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Faculty;
