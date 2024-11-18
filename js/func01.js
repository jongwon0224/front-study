// func01.js
//함수 호출
function func01 () {
    console.log('func01');
}
console.log(func01());
//-------------------------------------------
// 변수에 함수 대입
const func02 = function func002() {
    console.log('func02');
}
func02();
//-------------------------------------------
// 화살표 함수
const func03 = () => {
    console.log('func03');
}
func03();
//-------------------------------------------
// 매개변수 / 인수
function func05(a,b) {
    console.log(a + ':' + b);
}
func05(10,20);
//-------------------------------------------
// 함수명 설정
const func06 = function func006(a,b) {
    console.log(a +' '+ b);
}
func06(30,40);
//-------------------------------------------
// 익명함수
const func07 = function (a,b) {
    console.log(String(a) + b);
}
func07(80,40);
//-------------------------------------------
// 화살표 함수
const func08 = (a,b) => {
    console.log(String(a) + b);
}
func08(100,150);
console.log('-----');
//-------------------------------------------
function func10(a,b) {
    console.log(a+' '+b);
}
func10(10,20);
//-------------------------------------------
function func11(a,b) {
    console.log(a);
    b();
}

function temp() {
    console.log('temp func');
}

func11(temp2, temp);
//-------------------------------------------
// callback 함수
// temp2 함수를 실행하고나서 temp함수를 실행
function temp2(t) {
    console.log('temp2 func');
    t();
}

temp2(temp);
//-------------------------------------------
// 화살표함수 콜백
temp2 ( () => {
    console.log('그냥 바로만든함수');
} );
