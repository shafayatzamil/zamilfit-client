import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/header/Header';
import Footer from '../shared/footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;