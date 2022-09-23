import React from 'react';
import CosmeticDisplay from '../CosmeticDisplay/CosmeticDisplay';

const Cosmetics = () => {
    // ** Own fake data rendering

    const cosmetics = [
        {
          "_id": "632de56983da602f61f0d83d",
          "price": 96,
          "name": "Schmidt Stewart"
        },
        {
          "_id": "632de569878d8f0869f2bb97",
          "price": 457,
          "name": "Millicent Chavez"
        },
        {
          "_id": "632de569d7ca7ae7d7f68c2b",
          "price": 553,
          "name": "Lott Hicks"
        },
        {
          "_id": "632de56981c3f690ba71c0f6",
          "price": 670,
          "name": "Poole Reese"
        },
        {
          "_id": "632de569656f5e40e1b049e3",
          "price": 432,
          "name": "Farley Melton"
        },
        {
          "_id": "632de569a21d8e1a5c83f03f",
          "price": 74,
          "name": "Ellison Woodard"
        }
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