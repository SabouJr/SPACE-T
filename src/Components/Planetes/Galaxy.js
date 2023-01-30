import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../../styles/Galaxy.css';

const Galaxy = () => {
    return (
        <div className='Galaxy'>
            <Navbar />
            <div className="container">
                <div className="JUPITER">
                    <div id="carre"></div>
                </div>
                <div className="MARS">
                    <div id="carre"></div>
                </div>
                <div className="MERCURE">
                    <div id="carre"></div>
                </div>
                <div className="NEPTUNE">
                    <div id="carre"></div>
                </div>
                <div className="SATURNE">
                    <div id="carre"></div>
                </div>
                <div className="LA-TERRE">
                    <div id="carre"></div>
                </div>
                <div className="URANUS">
                    <div id="carre"></div>
                </div>
                <div className="VENUS">
                    <div id="carre"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Galaxy;