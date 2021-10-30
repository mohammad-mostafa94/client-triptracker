import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
const ManageServices = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("https://polar-springs-55831.herokuapp.com/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);

    const handleDeleteService = id => {
        const proceed = window.confirm("are you sure , you want to delete it?");
        if (proceed) {
            const url = `https://polar-springs-55831.herokuapp.com/service/${id}`
                    axios.delete(url)
                    .then(res=>{
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            alert("delete a service");
                            const remainingService = services.filter(service=> service._id !== id);
                            setServices(remainingService);

                        }
                    })
        }
        
    }
    return (
        <div className="text-center ">
            <Helmet> <title> Service Manage </title></Helmet>
            <h1>Manage Service</h1>
            <h2>Total service: {services.length}</h2>
            {
                services.map(service=> <div 
                            className ="m-5"
                            key={service._id}>
                            <h4>{service.name}</h4>
                            
                            <br />
                            <br />
                            <Link  to ="/addService"><button className="btn btn-success">Add service</button></Link>
                            <br />
                            <br />
                            <Link  to ={`/update/${service._id}`}><button className="btn btn-primary">Update service</button></Link>
                            <br />
                            <br />
                            <button className="btn btn-danger" onClick={()=>handleDeleteService(service._id)}>Delete</button>
                    
                        </div>)
            }
        </div>
    );
};

export default ManageServices;