
let username = prompt('Enter name');
let email = prompt('Enter E-mail');
let password = prompt('Enter password');

let user = {username, email, password}; //property shorthand คือการตั้งชื่อ key ให้ตรงกับ Valueที่เป็นvariable
// let user = {
//     name: username,
//     email: email,
//     password: password,
// };

console.log(user);
