import axios from 'axios';
import React from 'react';
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import './AddService.css';
const AddService = () => {

    const { register, handleSubmit ,reset} = useForm();

    const history = useHistory();

    const onSubmit = data => {
        axios.post("https://polar-springs-55831.herokuapp.com/service",data)
        .then(res=>{
            if (res.data.insertedId) {
                alert("data added successfully");
                reset();
                history.push("/")
            }
        })
    };
    return (
        <div className="addServiceStyle">
            <Helmet> <title> Service Add</title></Helmet>
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