const fruits = {};
const TERMINATE = 'stop'
let key ;
let value ;
do {  
    key = prompt('Enter fruit ');
    value = +prompt('Enter Quantity ');
    if (value == 1) {
        fruits[key] = value;
    } else if (value > 1 ) {
        fruits[`${key}s`] = value;
    }
} while (key != TERMINATE && value != TERMINATE);

console.log(fruits);