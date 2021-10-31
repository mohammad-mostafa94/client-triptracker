import React from 'react';
import feedback from '../../../image/feedback.png';
const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 my-5">
                    <h3>Send us feedback</h3>
                    <form className="py-4" >
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Your Email Address:</label>
                            <input defaultValue={"example@email.com"} id="email" className="form-control d-block" type="text" />
                        </div>
                        <div className="">
                            <label htmlFor="message" className="form-label">Your  Feedback here:</label>
                            <textarea defaultValue={"text here"} id="message" className="form-control d-block" type="text" />
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-info text-white">Send Now</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6  my-5">
                    <img className="img-fluid" src={feedback} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;