import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {

    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:5000/service",data)
        .then(res=>{
            console.log(res.data);
            console.log(res.data.insertedId);
            if (res.data.insertedId) {
                alert("data added successfully");
                reset();
            }
        })
    };
    return (
        <div className="addServiceStyle">
            <h1 className ="text-center">Add new service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")}  placeholder="name"/>
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")}  placeholder="image url"/>
                <textarea {...register("description")}  placeholder="description"/>
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddService;