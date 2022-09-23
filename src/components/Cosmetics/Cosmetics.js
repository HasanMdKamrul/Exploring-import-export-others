import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/common';
import CosmeticDisplay from '../CosmeticDisplay/CosmeticDisplay';

const Cosmetics = () => {
    // ** Own fake data rendering

    const [cosmetics,setCosmetics] = useState([]);

    useEffect(()=>{
        const dataLoader = async()=>{
            try {
                const response = await fetch('https://mocki.io/v1/16ff9a9a-7ba6-4be0-9ea6-2fac00bc93b9');
                response.ok? console.log('successful') : console.log('failed')
                const data = await response.json();
                setCosmetics(data)
            } catch (error) {
                console.log(error)
            }
        };

        dataLoader()
    },[]);

    const total = getTotal(cosmetics);
  
    return (
        <div>
            <h1>Cosmetics Component</h1>
            <p>Total Price:{total}</p>
            {
                cosmetics.map(cosmetic => <CosmeticDisplay key={cosmetic._id} cosmetic={cosmetic}></CosmeticDisplay>)
            }
        </div>
    );
};

export default Cosmetics;