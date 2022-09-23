// ** manage the cart data 

// ** 

const getLsData = ()=>{
    const storedData = JSON.parse(localStorage.getItem('shopping-cart'));

    let cartValue = {};

    storedData && (cartValue = storedData);

    return cartValue;

};

const addToLs = (id)=>{

    // ** get the stored value 

    const storedCartValue = getLsData();

    if (storedCartValue[id]) {
        storedCartValue[id] = storedCartValue[id] + 1;
    } else {
        storedCartValue[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(storedCartValue));

   
};

const removeFromLs = id => {
    // ** Remove korte gele koyekta jinish check korte hobe

    // ** 1st jinish 

    // ** Total j object ta ase oita asholei exist kore kina , bcz oita na thakle oitar vitor er jinish o thakbe na tahole kivabe remove korbo

    // ** Ei jonno first a stored ki ase oita k paite hobe (specific shooping cart ta)

    const storedCart = getLsData();

    if (storedCart) {
        if (id in storedCart) {
            delete storedCart[id];

            // * delete korar por value ta abar ls a set kore dibo

            localStorage.setItem('shopping-cart', JSON.stringify(storedCart));
        }
    }
}

export { addToLs, removeFromLs };

