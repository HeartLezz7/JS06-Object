// - ให้สร้าง Object calculator ซึ่งมี 3 method 
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

let calculator = {
    x: null,
    y: null,
    read(){
        this.x = + prompt('Enter first number ');
        this.y = + prompt('Enter second number ');
    },
    sum : function () {return this.x + this.y},
    mul : function () {return this.x * this.y},
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());
  console.log(calculator.sum());
  console.log(calculator.mul());
  console.log(calculator.x, calculator.y);