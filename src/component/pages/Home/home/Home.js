import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import Traingoffer from '../trainingoffer/Traingoffer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Traingoffer/>
            <About/>
        </div>
    );
};

export default Home;