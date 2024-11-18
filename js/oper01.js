// operator

let x = 10;
let y = 10;
let z = '10';

console.log(x == z); // T
console.log(x === z); // F
console.log(x != z); // F
console.log(x !== z); // T
console.log(x === Number(z)); // T


// if 처럼 사용 가능
// ex) 1 == 1 && 10 은 1, 1이 true면 10출력
console.log( 1 == 1 && 10); // 10
console.log( 1 != 1 && 10); // false

// ex) 1 != 1 || 20은 1, 1이 false면 20출력
console.log( 1 != 1 || 20); // 20
console.log( 1 == 1 || 20); // true

// 다중연산자 if문처럼 사용하기
// &&이나 ||연산자에 맞춰서 사용하면 if문처럼 사용가능
let a = 10;

a == 10 && console.log('A');
a != 11 && console.log('A');

let q = 10;
let w = '20';
let e = 30;

console.log(q+w); // 1020
console.log(q+e); // 40
console.log(q+' '+ e); // 10 30
console.log(q + String(e)); // 1030
console.log(q + Number(w)); // 30

console.log('HI');
console.log('HId')