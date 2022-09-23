import React from 'react';

const CosmeticDisplay = ({cosmetic}) => {
    const {name,price,id} = cosmetic;
    return (
        <div>
            <h2>Name:{name}</h2>
            <h2>Price:{price}</h2>
            <h2>Id:{id}</h2>
        </div>
    );
};

export default CosmeticDisplay;