import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Testi from './Testi/Testi';

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Testi></Testi>
            <Contact></Contact>
        </>
    );
};

export default HomePage;