import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const {user, logOut} = useAuth();
    const userName = user.displayName;
    console.log("logout",logOut);
    return (
        <div className="navbar ">
            <nav>
                <Link className="active" to="/"><i className="fa  fa-fw fa-home"></i>Home</Link>
                
                    <Link to="/"><i className="fa fa-fw fa-search"></i> Search</Link> 
                    <Link to="/">☎<i className="fa fa-fw fa-headset"></i> Service</Link> 
                    <Link to="/"><i className="fa fa-fw fa-envelope"></i> Contact</Link> 
                    
                    {
                        userName ? <Link onClick={logOut} to=""><i className="fa fa-fw fa-user"></i> Logout <i className = "text-primary ms-4">{userName.split(' ')[0]}</i> </Link>: <Link to="/login"><i className="fa fa-fw fa-user"></i> Login</Link>
                    
                    }
                  
                        {/* userName ?<Button><i className="fa fa-fw fa-user"></i> Logout</Button> 
                            : */}
                   
                
            </nav>
            
        </div>
    );
};

export default Header;