import React from 'react';
import SystemSolaire from '../3D/SystemeSolaire';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <SystemSolaire />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;