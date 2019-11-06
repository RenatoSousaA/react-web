import React from 'react';

import logo from '../../assets/logo.png';
import './style.css';

const Header = (props) => {
    return (
        <header className="header" style={{
            textAlign: "left", 
            padding: 5
        }}>
            <img src={ logo } alt="Logo"/>
        </header>
    );
};

export default Header;