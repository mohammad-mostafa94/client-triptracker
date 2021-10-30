import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [singleService , setSingleService] = useState([]);

    const {name, img ,description,price} = singleService;
    
    useEffect(()=>{
        fetch(`https://polar-springs-55831.herokuapp.com/service/${serviceId}`)
        .then(res=> res.json())
        .then(data => setSingleService(data) )
    },[])
    return (
        <>
            <Container>
                <Card className="bg-dark text-white">
                <Card.Img src={img} alt={name} />
                <Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price : ${price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </Container>
        </>
    );
};

export default ServiceDetails;