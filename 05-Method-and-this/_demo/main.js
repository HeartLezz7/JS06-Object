const log = console.log;
log('Method and this keyword');

// //#######################
// // ####### 1.Intro method
// //#######################

// // each record => called property
// // each property => <key>:<value>

// // some record => <key>:<FN>
// // called method == ความสามารถของ Object

// // function devWebsite () {
// //     console.log("I'm working");
// // }
// // function meeting () {
// //     console.log("I'm meeting");
// // }

// // const programmer = {
// //     name: 'Heart',
// //     age: 26,
// //     dev : devWebsite,
// //     meet : meeting,
// //     learn : reLearn,
// // };

// // // Property
// // // Syntax <obj>.<key>
// // log(programmer.name);
// // log(programmer.age);

// // // Method == ความสามารถของ Object
// // // Syntax : <obj>.<method>()
// // programmer.dev()
// // programmer.meet()
// // programmer.learn()

// // // เพิ่มmethod ให้ programmer 1 อย่าง และลองเรียกใช้งาน
// // function reLearn () {
// //     console.log("I'm learning");
// // }

// //#############################
// // ####### 2.Alternative Syntax
// //#############################

// const programmer = {
//     name: 'Heart',
//     age: 26,
//     dev : function () { 
//         console.log("I'm working")
//     },
//     meet :() => console.log("I'm meeting"),
//     // method shorthand
//     sleep() {
//         console.log("I'm sleeping");
//     },
// };

// programmer.dev()
// programmer.meet()
// programmer.sleep()

// // Mini-lab
// // สร้าง Object ของตัวเอง
// // ระบุคุณสมบัติของตัวเองสัก 2-3 ข้อ
// // ระบุความสามารถของตัวเองสัก 4 อย่าง(cover all syntax)
// // key : namefunction
// // key : anonymous FN
// // key : arrow FN
// // key : shortHand

// const me = {
//     name: 'Heart',
//     height : 181,
//     sportSkill : 'badminton',
//     eduSkill : function educationSkill () {console.log("Engineering")},
//     game : function () {console.log('I love DOG game')},
//     beer : (b) => {console.log(`${b} DESTROYER`)},
//     cafe (){console.log('Barista')},
// }

// me.eduSkill()
// me.game()
// me.beer("beers")
// me.cafe()

// // #################################
// // ##3.OOP : Object Oriented Program
// // #################################

// // const car = {
// //     brand: 'Tesla',
// //     model: 'X',
// //     drive: () => console.log('Driving'),
// //     'auto pilot' () {console.log('Self Driving')},
// //     speed: 80,
// // }

// // // Caller.method
// // car.drive();
// // car['auto pilot']();

// // const calculator = {
// //     sum : (x, y) => x + y,
// //     minus : (x, y) => x - y,
// // }

// // let a = calculator.sum(5,7);
// // let b = calculator.minus(5,7);
// // log(a,b)

// // log(car.speed);
// // car.speed = calculator.sum(car.speed, 20);
// // log(car.speed);

// //###################
// // ####### 4.This key
// //###################

// const user = {
//     name: 'CODECAMP',
//     age: 15,
//     sayHi: function () { console.log(`Hello ${this.name}`);},
//     growOld: function (){ 
//         console.log(this); 
//         // this == user , this.age == user.age
//         this.age++;
//     },
//  }

// Question : ทำอย่างไร method จะสามารถเข้าถึง property ของตัวเองได้
// user.sayHi();
// user.name = 'Software park';
// user.sayHi();

// log(user.age);
// user.growOld()
// log(user.age);

// Q : This ถูกตีค่าตอนที่เขียน function รึเปล่า ?
// A : ไม่!!!!!!!
// This == Dynamics Caller/Dynamics Context
// FN declaration
function dev(feature) {
    console.log(`This ${feature} developed by ${this.name}`);
}

const programmer1 = {
    name: 'John',
    develop: dev,
}

const programmer2 = {
    name: 'Jane',
    develop: dev,
}

// A : this ถูก solve ตอนเรียกใช้ method
// Caller.method => this == Caller == Object before the dot                            
// Checkpoint-1 : this == object ที่เรียกใช้ method
programmer1.develop('web app');
programmer2.develop('book');

// This = Current Execution Context
// 1.เวลา Run FN FN จะสร้าง Context สำหรับ Execute
// 2.ก่อนรัน JS ,มี context ตัวหนึงที่มาก่อนกาล ,Global,Window
// -This = Current Execution Context === Window Object

// #######################################
// ####### 5. Execution Context == Caller
// #######################################

// Global(Browser) : window object

// window.alert("I'm Global");
// this.alert("I'm Global this");
// talert("I'm execute in window");

// Function Declaration จะทำให้ sayHi ไปติดใน windowObj
// Hoisting

function sayHi (){
    console.log(this); // window
}
var a ='m';

// Execute Context = window
window.sayHi();
this.sayHi();
sayHi();

// Function Context
var name = 'codecamp';
function sayHello () {
    console.log(this.name);
}

sayHello();
window.sayHello();

const user = {
    name: 'John',
    say : sayHello,
    scream : () => {console.log(`scream by ${this.name}`);},
    scrm : function (){console.log(`scream by ${this.name}`);},
}

// User caller
user.say();
// SUMMARY : this == object caller

// Arrow ไม่มีความสามารถในการสร้าง Context
// Loose Context => Chain to Window
user.scream(); // *** dont use this keyword with arrow function ***
user.scrm();