// ojb03.js

let arr = [1,2,3];

// new int[5]; => ArrayList
// javascript에 배열을 조작하는 함수
//------------------------------------------------
// 배열 추가 함수
console.log(arr); // 1,2,3
arr.push(10); //1,2,3,10 || 배열 마지막에 값 추가
arr.unshift(20); // 20,1,2,3,10 || 배열 맨 앞에 값 추가
console.log(arr); // 20,1,2,3,10
console.log('---------------------------------')
// 배열 삭제 함수
arr.pop(); // 20,1,2,3 || 배열 마지막 값 삭제
arr.shift(); // 1,2,3 || 배열 맨 앞에 값 삭제
console.log(arr);

console.log(arr.pop()); // 3 ,맨 뒤에값 출력
let shiftItem = arr.shift();
console.log(shiftItem); // 1 ,맨 앞에 값 출력
console.log(arr); // 2 ,나머지 남은 값

console.log('---------------------------------')

// 배열 합체
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1.concat(arr2));

console.log('---------------------------------')

// 배열 생성
let arr3 = [...arr1]; // [...변수명]
//let arr3 = [90,...arr1,100]; // [데이터 + ...변수명 + 데이터]
console.log(arr3);
console.log(...arr3); // [...변수명]과 반대로 배열에서 분해

console.log('---------------------------------');

// 깊은 복사 (deep copy) vs 얕은 복사(shallow copy)
let arr4 = arr3; // 얕은 복사 => arr3값이 변하면 arr4의 값도 같이 변함
let arr5 = [...arr3]; // 깊은 복사 => arr5에 arr3을 주입


console.log('---------------------------------');

//splice 함수/메소드
// splice(시작 인덱스 위치, 위치기준 몇개, 추가로 넣고 싶은 값)
let arr6 = [1,2,3];
console.log(arr6.splice(1, 1, 5));
console.log(arr6);
console.log('---------------------------------')

let obj = {};
console.log(obj);

obj.menu = '김밥';
obj.price = 3500;
obj.location = '큰길';
console.log(obj);

obj.menu = '참치김밥'; //수정은 그냥 변수에 저장

delete obj.menu; // 객체에서 키값 삭제시 delete 사용
console.log(obj);  

console.log('---------------------------------')

// 날짜와 시간을 다루는 함수
//date && math
let today = new Date();
console.log(today); // 오늘 날짜
console.log(today.getDate()); // 일 만
console.log(today.getFullYear()); // 년도
console.log(today.getMonth()+1); // 월 (0 ~11까지만 반환 => 0 : 1월 ~ 11 : 12월)
console.log(today.getHours()); // 시간
console.log(today.getMinutes());// 분
console.log(today.getSeconds()); // 초

console.log(Math.round(1.55)); // 2 => 반올림
console.log(Math.trunc(1.55)); // 1 => 절삭
console.log(Math.floor(1.55)); // 1 => 내림
console.log(Math.ceil(1.55)); // 2 => 올림