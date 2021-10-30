import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    
    const {category,img,name ,Person,_id,price,location,review} = service;

    const history = useHistory();
    const handleServiceMore = () =>{
        history.push(`/service/${_id}`)
    }

    return (
        <Col  xs={12} md={8} lg={4}>
            <CardGroup>
                <Card className="shadow ">
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                    <small className="btn btn-info py-0 text-white">{category}</small>
                   <div className="d-flex mt-2 fw-bold justify-content-between">
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>${price}</Card.Title>
                   </div>
                    <Card.Text className="text-secondary">
                        <small><span><i className="fas fa-map-marker-alt"></i> <span>{location}</span></span> <span className="ps-5"><i className="fas text-warning fa-star"></i></span> <span className="text-warning">{review}</span></small>
                        <p className="pt-2"><span>Room Capacity: </span> <span className="text-dark">Max {Person} Person</span></p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Link className="btn btn-outline-info" to={`/service/${_id}`}>Details <i className="fas ps-2 fa-info-circle"></i></Link>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Col>
        
    );
};

export default Service;