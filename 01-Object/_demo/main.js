console.log('learn object');

//DataTypes
// - Primitive : Boolean,Number,String etc.....
// - Non-Primitive : Object

//######################
//### Object Declaration
//######################
//{} == stand for Object / Scope
//{record_1, record_2, record_3}
//each record = <Key_name> : <Value>
//<Value> any Datatype
//<key_name> Datatype : String
//record === property (คุณสมบัติ,สิ่งที่มี) = key-value pair

let user = {
    firstName : 'Heart', // Key : Value
    lastName : 'Sripen',
    age : 26,
    isAdmin : true,
    'like human' : true,
}

console.log(user);
//###########################
//### ACCESS , MODIFY, DELETE
//###########################

//Every action NEED <KEY_NAME> !!
//Dot Notation 
//<obj>.<keyName> == <value>
//ถ้าไม่มี record => return undefinded
//Restriction(ข้อจำกัด) : เข้าถึง key ที่มี space ไม่ได้่

//GET,POLL,READ
console.log(user.firstName);
console.log(user.address);
console.log(user.lastName);
console.log(user.age);
console.log(user.isAdmin);
console.log(user['like human']);

//MODIFY,UPDATE
//Syntax : <obj>.<key_name> = newvalue
user.firstName = 'Chantapath';
user.age = 25;
user.age += 2;
user.age++;
console.log(user.age);

//ADD
user.address = 'bkk';
console.log(user);

//DELETE
//Syntax : delete <obj>.<key_name>
delete user.isAdmin;
console.log(user);

//###########################
//### NESTED Object
//###########################

const employee ={
    fullName : 'Heart Lezz',
    salary : 1000000,
    address : {
        district: 'Phaya Thai',
        province: 'Bangkok',
        country: 'Thailand',
    },
}

console.log(employee.salary);
console.log(employee.address.province);
console.log(employee.address.village);
employee.address.province = 'Nonthaburian';
delete employee.address.country;

//Prevent CRASH !!
//Dot ใช้กับ Object เท่านั้น !!
//ห้ามมมมมมมมมมมมมมมมมมมม ใช้กับ Undefinded <Undefinded>.<key>
//วิธีแก้ optional chaining => <Undefinded>?.<key> ?คือการเช็คว่าตัวข้างหน้า dot ได้ไหม


// console.log(employee.addrs); 
// console.log(employee.addrs?.province); // undefinded.province จะเกิด ERROR 
// console.log(employee.addrs?.province); 
// console.log(employee.address?.province); 
// console.log(employee.address?.village); 

//###########################
//############# 4. Check key?
//###########################

const product = {
    id: 222,
    name: 'IPhone',
    price: 50_000, 
    discount: 0.05,
};

console.log(product.discount);//Undefinded

// IN Operator
// Syntax : <key_name_string> in <object> => BOOLEAN
console.log('name' in product);
console.log('discount' in product);

// method hasOwnProperty
// Syntax : <object>.hasOwnProperty(<keyn_ame>) => BOOLEAN
console.log(product.hasOwnProperty('name'));

//###########################
//#### 5. Bracket Notation []
//###########################

// Syntax : <obj>['<key_name_string>']
// ### 1 ใช้ bracket เมื่อชื่อ key ข้างในเป็น string เท่านั้น
// ### 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // Computed Key
// Access key-value ผ่านชื่อตัวแปรได้

console.log(product.id);
console.log(product['id']);

//console.log(product.is mobile); CRASH
console.log(product['is mobile']);

product['name'] = 'Iphone-15';

let aaa = 'name';

console.log(product['name']);
console.log(product[aaa]);
console.log(product.aaa); // product.aaa === productp['aaa'] === Undefinded