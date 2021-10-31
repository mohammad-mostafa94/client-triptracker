import React from "react";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from '../../image/logo.png';
import "./Login.css";

export default function Login() {

    const { signInUsingGoogle } = useAuth();


    // handle redirect URL 
    const location = useLocation();
    const history =  useHistory();
    const redirect_URL = location.state?.from || '/';
    const handleGoogleSignIn = () => {

        signInUsingGoogle()
        .then(result=> {
            history.push(redirect_URL);
        })
    }

    return (
        <div className="text-center">
        <Helmet> <title> Login Form </title></Helmet>
        <div>
            <h2>Welcome to </h2>
            <Link className="navbar-brand d-block  pt-5 pb-2" to="/">
                        <img className="me-2" width="200" src={logo} alt="logo" />
                        <p className="fs-1 text-info">triptracker</p>
                    </Link>
        </div>

            <br />
            <Button className="btn btn-info text-white mb-5" onClick={handleGoogleSignIn} block size="lg" >
            <i class="fab fa-google-plus-g"></i> Google SignIn
            </Button>

        
        </div>
    );
}