let user = {};
user.name = 'John';
user.surname = 'Doe';

console.log(user);

user.name = 'Matt';
console.log(user);

delete user.name;
console.log(user);
