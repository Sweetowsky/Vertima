import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="/logo.jpg" alt="Vertima - Logo firmy" />
                </div>
                <div className="company-name">
                    <h1>Vertima</h1>
                    <p>Ogrodzenia Systemowe</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
