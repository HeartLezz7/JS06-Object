const log = console.log;
log('Learn Ref. ');

// Copied by Value
// Copied by Reference

// PRIMITIVE
let message = 'Hello';

// *** COPIED BY VALUE
let word = message;
let phrase = message;

log(message);
log(word);

message = 'Hi';
log(message);
log(word);

// OBJECT
// User เก็บ address ของ Literal Object
let user = {
    name: 'John',
}

// *** COPIED BY REFERENCE เมื่อเป็นการบอกที่อยู่ให้กับอีกตัวแปรหนึ่ง
let employee = user;
log(employee);

user.name = 'Jane'
log(employee);
log(user);
employee.name = 'Joe'
employee.age = 23;
log(user);
log(employee);
