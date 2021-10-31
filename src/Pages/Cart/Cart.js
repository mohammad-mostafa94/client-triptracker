import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';

const Cart = () => {

    const [info, setInfo] = useState([]);

    useEffect(()=>{
        fetch("https://polar-springs-55831.herokuapp.com/usersInfo")
        .then(res => res.json())
        .then(data => {
            setInfo(data)
        })
    },[])
    return (
        <div>
            <section className="container py-5">
                <h1>Reserve resorts</h1>
                <div className="row g-4">
                        {
                            info.map(resort=><SingleItem
                            key={resort._id}
                            resort = {resort}
                            >
                            </SingleItem>)
                        }
                </div>
            </section>
        </div>
    );
};

export default Cart;