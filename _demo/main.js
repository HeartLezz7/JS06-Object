//Recap

//Function #1 DECLARATION
function add (x, y) {
    return x +y;
}

//Function #2 EXPRESSION

let mluti = function (x, y) {
    return x*y;
}

//Function #3 EXPRESSION ARROw

let minus = (x, y) => x-y;

//Object

const user = {
    name: 'John',
    age: 33,
    isMarried: false,
    address: {
        village: 'Ladda Land',
        province: 'Chaing Mai',
    }
}

let a = 'name';
console.log(user.a);// วิ่งไปหาkey a => undefined
console.log(user[a]);// user['name'] => John
// Note : เมื่อชื่อ key ถูกเก็ลไว้่ในตัวแปรต้อง access ผ่าน [ ]

// DELETE

delete user.isMarried;
console.log(user);
// delete user['age'];
console.log(user);

let b = 'address';
// delete user[b];
console.log(user);

// UPDATE
let x= 5;
x = x + 2;
//container = value + 2

user.age = user.age + 1;
user.age += 1 ;
console.log(user.age);

user['age'] = user['age'] + 5;
console.log(user.age);

user['age'] += 5;
console.log(user.age);

user['age']++;
console.log(user.age);

// use key variable
let key = 'age';

// Computed key
user[key] = user[key] + 5;
console.log(user.age);