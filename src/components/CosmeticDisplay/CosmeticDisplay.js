import React from 'react';

const CosmeticDisplay = ({cosmetic}) => {
    const {name,price,_id} = cosmetic;
    return (
        <div>
            <h2>Name:{name}</h2>
            <h2>Price:{price}</h2>
            <h2>Id:{_id}</h2>
        </div>
    );
};

export default CosmeticDisplay;