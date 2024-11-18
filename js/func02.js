
// arrForEach();
// CallBack 함수...
// for문안에 func(arr[i], i)가 인자 => innerFunc의 매개변수가 됨
function arrForEach ( func ) {
    let arr = [10,20,30,40];
    
    for(let i in arr) {
        func(arr[i], i);
    }
}

const innerFunc = function (item, index) {
    console.log(item + " : " + index);
}

arrForEach(innerFunc); // 10:0, 20:1, 30:2, 40:3
//-------------------------------------------------------------------

// setTimeout(함수, 시간) : 일정시간 후 함수 실행
// 시간단위는 ms => 1000 = 1초

const cb = () => {
    console.log('Callback함수');
}

const outCallBack = (cb) => {
    console.log('out call back 실행할거 다하고');
    cb();
}

setTimeout(
    () => {
        console.log('함수실행');
        outCallBack(cb);
    },
    2000
);

// function 함수로 콜백
/*
const cb = function() {
    console.log('CallBack함수');
}

const outCallBack2 = function (cb) {
    console.log('outcallback끝나고');
    cb();
}

setTimeout (
    function() {
        console.log('함수실행1');
        outCallBack2(cb);
    },
    2000
);
*/
//---------------------------------------------------------------