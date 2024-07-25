import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from  '../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg p-3">
            <div className="container-fluid">
                <Link className="navbar-brand logo"  to="/"><img style={{width: '50px'}} src={logo}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active px-3" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active px-3" to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active px-3" to="/academics">Academics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active px-3" to="/admissions">Admissions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active px-3" to="/faculty">Faculty</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active px-3" to="/student">Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active px-3" to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active px-3" to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
