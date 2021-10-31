import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({resort}) => {
    const {name,email,date,address,price,userName,number,status,_id} = resort;
    console.log("normal ID",_id);

    const [info, setInfo] = useState([]);
    const [filterInfo, setFilterInfo] = useState([]);

    useEffect(()=>{
        fetch("https://polar-springs-55831.herokuapp.com/usersInfo")
        .then(res => res.json())
        .then(data => {
            setInfo(data)
        })
    },[])

    const handleDeleteReservation = id => {
        console.log("delete ID",id);
        const proceed = window.confirm("are you sure , you want to delete it?");
        if (proceed) {
            const url = `https://polar-springs-55831.herokuapp.com/userInfo/${id}`
                    axios.delete(url)
                    .then(res=>{
                        if (res.data.deletedCount) {
                            alert("delete a service");
                            const remainingService = info.filter(service=> service._id !== id);
                            setFilterInfo(remainingService);

                        }
                    })
        }
        
    }
    
    return (
        <div className="col-lg-4 col-md-6 text-start">
            <div className="shadow  rounded-3 h-100  p-4">
                <h1>Resort Name:{name}</h1>
                <p>Total Amount:{price}</p>
                <h4>Guest details:</h4>
                <p>Name: {userName}</p>
                <small className="d-block">Email:{email}</small>
                <small className="d-block">Date:{date}</small>
                <small className="d-block">Address:{address}</small>
                <small className="d-block">Mobile:{number}</small>
                <p>Status: 
                    {
                        status?(<span className="text-info">Approved</span>):(<span className="text-danger">Pending</span>)
                    }
                </p>
            <div className="mt-3">
                    <Link onClick={()=>handleDeleteReservation(_id)} className="btn btn-danger" to="/cart">Delete reservation</Link>
            </div>
            </div>
            
        </div>
    );
};

export default SingleItem;