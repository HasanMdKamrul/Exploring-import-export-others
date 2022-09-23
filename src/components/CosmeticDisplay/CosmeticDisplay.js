import React from 'react';
import { addToLs, removeFromLs } from '../../utilities/manageDb';
import './CosmeticDisplay.css';

const CosmeticDisplay = ({cosmetic}) => {
    const {name,price,_id} = cosmetic;
    // ** Button handle
    const buttonHandlerWithParams = id=> addToLs(id);

    const removeItemHandler = id => removeFromLs(id);
    
    return (
        <div className='product'>
            <h2>Name:{name}</h2>
            <h2>Price:{price}</h2>
            <h2>Id:{_id}</h2>
            {/* ** How to add event handler with paremeters */}
            <button onClick={()=> buttonHandlerWithParams(_id)}>Add to Cart</button>
            <button onClick={()=> removeItemHandler(_id)}>Remove Item</button>
        </div>
    );
};

export default CosmeticDisplay;