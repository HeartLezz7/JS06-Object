// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

// Sub program-1 : Input
let name = prompt('Enter Product Name ');
let price = Number(prompt('Enter Price'));
let quantity = +prompt('Enter Quantity ');
let discount = prompt('Enter Discount ') * 1;
// quantity, price, discount ทั้ง3ตัวด้านบนคือวิธีการแปลงString to Number 

// Sub program-2 : CreateObject
// const product = {
//     name: name,
//     quantity: quantity,
//     price: price,
//     discount: discount,
// }
//เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value สามารถยุบ Syntax(Property shorthand)
const product = {
        name,
        price,
        quantity,
    }
if (discount != 0) product[discount] = discount;
console.log(product);

// Sub program-3 : Calculate price
// function calPrice (price, quantity, discount = 0) {
//     let totalPrice = price * quantity * (1-discount);
//     return totalPrice;
// }

// let result = calPrice(product.price, product.quantity, product.discount);
// console.log(result);

function calPrice (productObj) {
    let price = productObj.price;
    let quantity = productObj.quantity;
    let discount = productObj.discount ?  productObj.discount : 0;
    return price * quantity * (1-discount);
}
let result = calPrice(product);
// let result = calPrice(name, quantity, price, discount);
console.log(result);