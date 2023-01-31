import React from 'react';
import Scene from '../3D/Scene';
import Sun from '../3D/Sun';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />

            <Sun />
            <Footer />
        </div>
    );
};

export default Home;