const log = console.log;
log('Object Clone');

const todo = {
    task: 'Do Hw',
    complete: false,
    due_date: '13-08-2023',
}

// Clone
// const newTodo = {};
// log(newTodo)
// // 1.เอาต้นแบบมา loop แล้ว assign ที่ละ key:value ให้ object ใหม่

// for (let key in todo) {
//     // assign ที่ละ key:value ให้ newTodo
//     newTodo[key] = todo[key];
//     //newtodo['task'] = todo['task'] => 'Do Hw'
// }
 
// log(newTodo);

// 2. Object.assign

const newTodo = {
    complete: true,
    status: '80%',
};


//MERGE/OVERRIDE EVALUATE Direction : RIGHT -> LEFT ถ้่ามี key ที่ซ้ำกันจะเอาค่าด้านขวาทับด้านซ้าย ในข้อนี้คือ todoเขียนทับnewTodo
Object.assign(newTodo, todo);

log(newTodo);
log(todo === newTodo); 

const newTodo2 = Object.assign({},newTodo);
log(newTodo2);