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