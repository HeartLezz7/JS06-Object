const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
user.isActive = false;
console.log(user); // *โชว์ property ทั้งหมดที่มีใน object
user = {};
console.log(user); // ** ERRORเพราะชนิดตัวแปรเป็น const ไม่สามารถเปลี่ยนค่าได้