//obj.02

let scores = [10, 30, 50, 40];

// for 반복문
for(let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
} // 10,30,50,40

console.log('-----------------------------------------');

// for + 'key' + in '변수' //반복문 => scores의 key값 구해줌
for(let i in scores) {
    console.log(i + ':' + scores[i]);
} // 0:10 1:30 2:50 3:40

console.log('-----------------------------------------');

// for + 'key' + of '변수' //반복문 => 바로 value값 구해줌
for(let item of scores) {
    console.log(item);
} // 10,30,50,40

console.log('-----------------------------------------');

// for each 반복문 => 변수.forEach( function (value, index) { ~~~ });
// item 매개변수에 scores배열에 있는 값을 넣어줌
scores.forEach( (item, index)=> {
    console.log(item + ' : ' + index);
}); //10 : 0, 30 : 1, 50 : 2, 40 : 3

console.log('-----------------------------------------');

scores.forEach( function(item, index) {
    console.log(item + ' : ' + index);
}) //10 : 0, 30 : 1, 50 : 2, 40 : 3

console.log('-----------------------------------------');