const log = console.log;

log('Constructor Function');

const dev1 = {
    name: 'John',
    age: 32,
    role: 'dev',
    salary: 40_000,
    dev : function () {
        console.log('im develop sime features');
    },
}

// Object Creators == Constructor Function ใข้คำนำหน้าสุดเป็นตัวใหญ่เพื่อให้รู้ว่าเป็นตัวสร้าง

function Developer(name, age) {
    // [1]Implicit(สิ่งทีมองไม่เห็น) create this = {}
    this.name = name; // {name: 'Heart'}
    this.age = age; // {name: 'Heart', age: 26,}
    this.role = 'dev'; // {name: 'Heart', age: 26, role: 'dev',}
    this.salary = 40_000;
    this.dev = function () {
        console.log(`${this.name} develop sime features`);
    };
}
// [2]Implicit Return this
// return {name....., dev : fn{}}


// this == dev2
// [3]this = Instance
const dev2 = new Developer('Heart', 26);
log(dev2);
dev2.dev();

const dev3 = new Developer('Jane', 30);
log(dev3);
dev3.dev();