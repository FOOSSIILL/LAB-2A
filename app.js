//Birthday-calculator
/*---------------------- Normal Dependence--------------------------------*/

//Load module
const calculator = require('birthday-calculator');

//Instantiate
const date = new Date('1990,10,01');
const result = calculator.getDayWhenBorn(date);

console.log(result);



