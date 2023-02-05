import React from 'react';
import App from '../3D/Arena';
import Scene from '../3D/Scene';
import Sun from '../3D/Sun';
import SystemSolaire from '../3D/SystemeSolaire';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <SystemSolaire />
            <Scene />
            <Sun />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;