import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import Service from './Service';

const Services = () => {
    const [services , setServices] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch("https://polar-springs-55831.herokuapp.com/services")
        .then(res => res.json())
        .then(data => {
            setServices(data)
            // setIsLoading(false);
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
                                    timeout={5000} //5 secs
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