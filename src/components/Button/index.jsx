import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Button = (props) => {
    return (
        <Link to={`/product/${props.id}`}>
            <button>Abrir produto</button>
        </Link>        
    );
};

export default Button;