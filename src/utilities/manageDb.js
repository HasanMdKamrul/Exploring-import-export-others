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

export { addToLs };
