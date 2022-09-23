import React from 'react';
import CosmeticDisplay from '../CosmeticDisplay/CosmeticDisplay';

const Cosmetics = () => {
    // ** Own fake data rendering

    const cosmetics = [
        {name:'Lipstick',price:200,id:1},
        {name:'Alta',price:300,id:2},
        {name:'Nailpalish',price:500,id:3},
        {name:'Gel',price:200,id:4},
    
    ]
  
    return (
        <div>
            <h1>Cosmetics Component</h1>
            {
                cosmetics.map(cosmetic => <CosmeticDisplay cosmetic={cosmetic}></CosmeticDisplay>)
            }
        </div>
    );
};

export default Cosmetics;