import React from 'react';
import './CosmeticDisplay.css';

const CosmeticDisplay = ({cosmetic}) => {
    const {name,price,_id} = cosmetic;
    // ** Button handle
    const buttonHandlerWithParams = id=>console.log(id,"Item Added");
    
    return (
        <div className='product'>
            <h2>Name:{name}</h2>
            <h2>Price:{price}</h2>
            <h2>Id:{_id}</h2>
            {/* ** How to add event handler with paremeters */}
            <button onClick={()=> buttonHandlerWithParams(_id)}>Add to Cart</button>
        </div>
    );
};

export default CosmeticDisplay;