import React from 'react';
import man from '../../../image/man.jpg';

const Testi = () => {
    return (
        <div className="container">
            <section className="mx-auto text-center col-md-8 py-5 my-4">
                <h1>Visitor's Experience</h1>
                <div className="col-md-3 mx-auto">
                    <img className="img-fluid" src={man} alt="man img" />
                </div>
                <h5 className="text-info mt-3">Gm Shakil</h5>
                <small className="text-secondary">Traveller</small>
                <div>
                    <p>"I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all."</p>
                </div>
            </section>
        </div>
    );
};

export default Testi;