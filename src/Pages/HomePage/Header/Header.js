import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="navbar ">
            <nav>
                <Link className="active" to="/"><i className="fa  fa-fw fa-home"></i>Home</Link>
                
                    <Link to="/"><i className="fa fa-fw fa-search"></i> Search</Link> 
                    <Link to="/">☎<i className="fa fa-fw fa-headset"></i> Service</Link> 
                    <Link to="/"><i className="fa fa-fw fa-envelope"></i> Contact</Link> 
                    <Link to="/login"><i className="fa fa-fw fa-user"></i> Login</Link>
                
            </nav>
            
        </div>
    );
};

export default Header;