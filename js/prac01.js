
const personInfo = {
    name : '홍길동',
    age : 25,
    phone :'010-1234-5678',
    engName : 'John Smith',
    nickname : ' 복습마왕 ',
}


// var a = new Array(personInfo.phone); // 배열로 바꿔줌
// var b = personInfo.phone.split('-'); // '-' 기준으로 나눈 후 배열로 바꿈

// console.log(a); // [ '010-1234-5678' ]
// console.log(b); // [ '010', '1234', '5678' ]



function change (personInfo) {
    personInfo.phone = new Array(personInfo.phone);
    personInfo.engName = personInfo.engName.toUpperCase();
    personInfo.nickname = personInfo.nickname.trim();
};

change(personInfo);
console.log(personInfo);