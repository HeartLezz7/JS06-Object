// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumulator(startingValue) {
    this.currentValue = startingValue,
    x = null,
    this.read = function (){
        this.x = + prompt('Enter number ');
        return this.currentValue += this.x
    },
    this.show = function () {
        alert(this.read());
        return this.currentValue;
    };  
}

let accumulator = new Accumulator(20000);
console.log(accumulator.show());
