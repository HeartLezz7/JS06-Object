let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

// #1
function multiplyNumeric (obj, num){
    for (let key in obj) {
        if (isNaN(obj[key])) {break}
        obj[key] *= num 
    }
    return obj;
}

// #2 ARROW Function
const multiplyNumeric2 = (obj, num) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') obj[key] *= num ;
    }
    return obj;
}
//   menu = {
//     width: 600,
//     height: 900,
//     title: 'My menu'
//   };
