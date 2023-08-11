
var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser(); //คิอการ execute บน windowObj
console.log(user.ref.name); // * Joe เพราะ this ถูก execute ที่functionซึ่งถูกcallบน windowObj this ใน ref เลยถูกมองว่า run บนวินโดว 