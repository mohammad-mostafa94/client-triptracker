import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';

const UpdateService = () => {

    const [updateService,setUpdateService] = useState({});
    
    const {updateId} = useParams();

    const { register, handleSubmit} = useForm();
    
    useEffect(()=>{
        fetch(`https://polar-springs-55831.herokuapp.com/service/${updateId}`)
        .then(res=>res.json())
        .then(data=>{
            setUpdateService(data);
        })
    },[]);

    const handleChangeName = e =>{
        const updatedName = e.target.value;
        const updatedService = { ...updateService, name:updatedName};
        setUpdateService(updatedService);
    }
    const handleChangePrice = e =>{
        const updatedPrice = e.target.value;
        const updatedService = {...updateService,price:updatedPrice};
        setUpdateService(updatedService);
    }

    const history = useHistory();
    const onSubmit = () => {
        axios.put(`https://polar-springs-55831.herokuapp.com/update/${updateId}`, updateService)
        .then(res=>{
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                alert("data updated successfully");
                setUpdateService({});
                history.push("/");
            }
        })
        };
    
    return (
        <div>
            <h1>Update service ID:{updateService._id}</h1>
            <h1>Update service name: {updateService.name}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} onChange={handleChangeName} value={updateService.name || ''} 
                placeholder="name"/>

                <input type="number" {...register("price")} onChange={handleChangePrice} value={updateService.price || ''} />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateService;