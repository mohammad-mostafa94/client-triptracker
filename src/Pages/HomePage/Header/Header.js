import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logo.png';
import './Header.css';
const Header = () => {
    const {user, logOut} = useAuth();
    const userName = user.displayName;
    console.log("logout",logOut);
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="me-2" width="40" src={logo} alt="logo" />
                        <span className="fs-4 text-info">triptracker</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-lg-0">
                        
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/offering">Offering</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item me-2">
                            <span className="nav-link">
                                {
                                    user?.displayName && (<span><i className="fa fa-fw fa-user"></i>{user.displayName.slice(0,user.displayName.indexOf(" "))}</span>)
                                }
                            </span>
                        </li>
                        <li className="nav-item me-5">
                        {
                        userName ? <Link  className="nav-link" onClick={logOut} to="/login"> <span className="me-3 text-info">Logout</span></Link>: <Link  className="nav-link text-info" to="/login"> Login</Link>
                    
                    }
                        </li>

                        
                    </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;