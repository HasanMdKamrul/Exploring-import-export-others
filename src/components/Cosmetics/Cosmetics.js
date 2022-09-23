import React, { useEffect, useState } from 'react';
import CosmeticDisplay from '../CosmeticDisplay/CosmeticDisplay';

const Cosmetics = () => {
    // ** Own fake data rendering

    const [cosmetics,setCosmetics] = useState([]);

    useEffect(()=>{
        const dataLoader = async()=>{
            try {
                const response = await fetch('data.json');
                response.ok? console.log('successful') : console.log('failed')
                const data = await response.json();
                setCosmetics(data)
            } catch (error) {
                console.log(error)
            }
        };

        dataLoader()
    },[])
  
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