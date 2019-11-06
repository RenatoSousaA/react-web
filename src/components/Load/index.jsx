import React from 'react';
import './style.css';

const Load = (props) => {
    if (props.loadActive) {
        return (
            <div>Loading...</div>
        );        
    }    

    return null;
};

export default Load;