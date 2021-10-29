import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import Service from './Service';

const Services = () => {
    const [services , setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setIsLoading(false);
        })
    },[])
    return (
        <div className="text-center">
            <Container>
                <Row>
                    <>
                        {
                            (services.length === 0) ? (
                                <Loader
                                    type="Puff"
                                    color="#00BFFF"
                                    height={100}
                                    width={100}
                                    timeout={3000} //3 secs
                                />
                                
                            ) : (
                                services.map(service => <Service
                            key = {service._id}
                            service = {service}>
                            </Service>)
                            )
                            
                        }
                    </>
                </Row>
            </Container>
            
    
    
            
        </div>
    );
};

export default Services;