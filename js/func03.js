// return 설명
function fff () {
    console.log(1);
    console.log(2);
    // return;
    // console.log(3);
    return 3;
}

let result = fff(); 
console.log(result); // fff함수에서 3리턴 => result 변수에 대입 => 출력시 3출력

// ------------------------------------------------------------
// 화살표 함수에서 중괄호 여부 차이
// 1. 중괄호 있음 + return 사용
const af = () => { // 화살표 함수 (arrow함수)
    console.log (4);
    console.log (5);
    return 6;
}
console.log(af());

// 2. 중괄호 없음 + return 바로됨
// 화살표함수에서 {}생략시 바로 return 됨
// const af2 = () => 7;
// const af2 = () => 7+7+7+7;
const af2 = () => 7**7; 
console.log(af2());
// ------------------------------------------------------------

// 변수설정시 var vs let 차이
ccc = 3000;
var ccc;
console.log(ccc); // 3000

// dd = 30;
// let dd;
//console.log(dd); // error
// ------------------------------------------------------------
// 함수 호이스팅
check();
function check () {
    console.log('check');
}
check();

// 1회용 함수
(function init() {
    console.log('1회용 함수');
}) ();
