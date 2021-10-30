import React from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    
    const {img,name ,description,_id,price} = service;

    const history = useHistory();
    const handleServiceMore = () =>{
        history.push(`/service/${_id}`)
    }

    return (
        <Col  onClick={handleServiceMore}  xs={6} md={4}>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price : ${price}</Card.Title>
                    <Card.Text>
                        {description.substring(0, 100)}...
                        
                            <Button onClick={handleServiceMore} variant="outline-secondary" >more</Button>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Link to={`/service/${_id}`}>
                        <Button>Buy now</Button>
                    </Link>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Col>
        
    );
};

export default Service;