// ** manage the cart data 

const addToLs = (id)=>{

    // ** get the data from ls

    const quantity = localStorage.getItem(id);

    quantity ? localStorage.setItem(id, parseInt(quantity) + 1) : localStorage.setItem(id,1) ;

   
};

export { addToLs };
