const user = {
    firstName: 'Codecamp',
    lastName: 'Software park',
    age: 15,
};

// For IN : Loop through Object
// for (let <key_variable> in <Obj>) {}
for (let key in user){
    // let key = 'firstName'
    // let key = 'lastName'
    // let key = 'age'

    console.log(key); // auto dynamics assign by JS in <string>
    console.log(`VAL : ${user[key]}`); // need to access by bracket , computed key
    // 1st : user[key] == user['firstName'] ==> Codecamp 
    // 2st : user[key] == user['lastName'] ==> Software park
    // 3st : user[key] == user['age'] ==> 15

    console.log(user.key);
    // 1st : user.key ==> undefinded
    // 2st : user.key ==> undefinded
    // 3st : user.key ==> undefinded

    // console.log(`${key} : ${user[key]} `);

}

// 'firstName' in user; // true
// 'age' in user; // true
// 'phone' in user; // false