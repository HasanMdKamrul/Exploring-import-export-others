// ** common functions

const add = (num1,num2) => num1 + num2;

const division = (num1,num2) => num1 /num2;

// ** Total price calculation

const getTotal = (cosmetic)=> cosmetic.reduce((previousValue,currentValue)=> previousValue + currentValue.price,0);


export { add, division, getTotal };
