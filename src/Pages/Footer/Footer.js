import React from 'react';
import { Link } from 'react-router-dom';
import apple from '../../image/apple.png';
import logo from '../../image/logo.png';
const Footer = () => {
    return (
        <div className="bg-light">
            <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-12  my-5">
                    <div>
                        <Link className="navbar-brand d-block" to="/">
                                <img className="me-2" width="50" src={logo} alt="logo" />
                                <span className="fs-4 text-info">triptracker</span>
                        </Link>
                    </div>

                    <div className="my-3">
                        <h5>Download Our App</h5>
                        <img style = {{height:"50px"}} className="img-fluid" src={apple} alt="" />
                    </div>

                    <div>
                        <p>All rights reserved. <br />@ 2021 <span className="text-info">Mohammad Mostafa.</span></p>
                    </div>
                    
                </div>

                <div className="col-lg-3 col-5  my-5">
                    <h5>Quick Links</h5>
                    <div>
                        <Link className="text-decoration-none text-secondary d-block"><i className="fas fa-caret-square-right me-2"></i> About</Link>                        <Link className="text-decoration-none text-secondary d-block"><i className="fas fa-caret-square-right me-2"></i> Career</Link>
                        <Link className="text-decoration-none text-secondary d-block"><i className="fas fa-caret-square-right me-2"></i> Testimonial</Link>
                        <Link className="text-decoration-none text-secondary d-block"><i className="fas fa-caret-square-right me-2"></i> Disclaimer </Link>
                        <Link className="text-decoration-none text-secondary d-block"><i className="fas fa-caret-square-right me-2"></i> Privacy Policy </Link>
                        <Link className="text-decoration-none text-secondary d-block"><i className="fas fa-caret-square-right me-2"></i> Terms and Condition </Link>
                    </div>
                </div>
                
                <div className="col-4 my-5">
                    <h5>Connect With Us</h5>
                        <p><i className="fas fa-map-marked-alt"></i> Jigatula,Dhanmondi,Dhaka-1091,Bangladesh.</p>
                        <p><i className="fas fa-envelope-open-text"></i> mohammadmostafa1094@gmail.com</p>
                        <p> <i className="fas fa-phone-square-alt"></i> +018208094308</p>
                    <div><h4>Connect Us</h4></div>
                    <div>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter mx-3"></i> 
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;