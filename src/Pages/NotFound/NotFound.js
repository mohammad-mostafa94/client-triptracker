import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../image/notFound.png';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid" src={notFound} alt="" />
                </div>
                <div className="col-md-6 ps-5 py-5">
                        <h1 className="text-info">Uppsssss.........</h1>
                        <p>The page you have requested is not found !!!</p>
                        <Link className="btn btn-info" to='/'>Return </Link>

                </div>
            </div>
        </div>
    );
};

export default NotFound;