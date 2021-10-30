import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { useParams } from 'react-router';
const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [singleService , setSingleService] = useState([]);

    const {description,category,img,name ,Person,_id,price,location,review} = singleService;
    
    useEffect(()=>{
        fetch(`https://polar-springs-55831.herokuapp.com/service/${serviceId}`)
        .then(res=> res.json())
        .then(data => setSingleService(data))
    },[])
    return (
        <><Helmet><title>Details of service</title></Helmet>
            <div className="container py-5">
                <h6 className="text-info">Category: {category}</h6>
                <h1>{name}</h1>
                <p className="text-secondary"><span><i className="fas pe-1 fa-map-marker-alt"></i> <span>{location}</span></span> </p>
                <img className="rounded-lg d-block w-75" src={img} alt={name} />
                <h3 className="mt-4">Details</h3>
                <p className="text-secondary my-2">{description}</p>
                <h5><span className="text-secondary">Rating: </span> <span className="ps-2"><i className="fas text-warning fa-star"></i></span> <span className="text-warning">{review}</span></h5>
                <h5 className="text-secondary">Capacity: <span className="text-dark">Max {Person} Person</span></h5>
                <h4 className="text-dark">Price: <span className="text-info">${price}</span></h4>
            </div>
        </>
    );
};

export default ServiceDetails;