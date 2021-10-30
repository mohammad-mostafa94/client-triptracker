import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageServices = () => {

    const [services, setServices] = useState([])
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
        <div>
            <h1>Manage Service</h1>
            {
                services.map(service=> <div key={service._id}>
                    <h4>{service.name}</h4>
                    <button className="btn btn-danger" onClick={()=>handleDeleteService(service._id)}>Delete</button>
                    <br />
                    <br />
                    <Link className="btn btn-primary" to ={`/update/${service._id}`}><button >Update service</button></Link>
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;