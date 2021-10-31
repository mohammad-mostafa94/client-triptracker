import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const BookingForm = () => {

    const {serviceId} = useParams();
    const [singleService , setSingleService] = useState([]);
    const {name , price} = singleService;

    const history = useHistory()
    
    useEffect(()=>{
        fetch(`https://polar-springs-55831.herokuapp.com/service/${serviceId}`)
        .then(res=> res.json())
        .then(data => setSingleService(data))
    },[]);

    const refNumber = useRef();
    const refDate = useRef();
    const refAddress = useRef();


    const {user} = useAuth();

        const handleBookForm = (e) =>{
            const userName = user.displayName;
            const email=  user.email;
            const number=  refNumber.current.value;
            const date=  refDate.current.value;
            const address=  refAddress.current.value;
            const status = 0;
            const info = {userName,number,email,date,name,price,address,status};

            axios.post("https://polar-springs-55831.herokuapp.com/userInfo",info)
                .then(res=>{
                    if (res.data.insertedId) {
                        alert("data added successfully");
                        
                        history.push("/");
                    }
                })
                e.preventDefault();
            };

    
    return (
        <div>
            <form onSubmit={handleBookForm} className="bg-light rounded-20 p-5 mt-5">
                    <h3 className="mt-4 mb-0 text-info">Booking Form</h3>
                    <div className="my-4">
                        <label htmlFor="name" className="form-label">Full Name</label>

                        <input  type="text" className="form-control" id="name" value={user.displayName} disabled />

                    </div>
                    <div className="my-4">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input value={user.email} disabled  type="email" className="form-control" id="email" required />
                    </div>
                    <div className="my-4">
                        <label htmlFor="phone" className="form-label">Contact Number</label>
                        <input ref={refNumber} type="number" className="form-control" id="phone" required />
                    </div>
                    <div className="my-4">
                        <label htmlFor="booktime" className="form-label">Booking Date</label>
                        <input ref={refDate}  type="date" className="form-control" id="booktime" required />
                    </div>
                    <label htmlFor="address" className="form-label">Address</label>
                        <input ref={refAddress}  type="text" className="form-control" id="address" required />
                    <button type="submit" className="btn btn-info mt-4">Book This Package</button>
                </form>
        </div>
    );
};

export default BookingForm;