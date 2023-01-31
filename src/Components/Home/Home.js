import React from 'react';
import Scene from '../3D/Scene';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Scene />
            <Footer />
        </div>
    );
};

export default Home;