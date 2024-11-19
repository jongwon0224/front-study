
function getMealByTime(time) {
    if(time >= 6 && time <= 10) {
        return '아침';
    } else if (time >= 11 && time <= 14) {
        return '점심';
    } else if (time >= 17 && time <= 20) {
        return '저녁';
    } else if (time >= 21 && time <= 23) {
        return '야식';
    } else {
        return '금식';
    }
}
console.log(getMealByTime(15));

console.log(10 == '10');

/*
//------------------------------------------------------------------------
const getMealByTime = function (time) {
    if(time >= 6 && time <= 10) {
        return '아침';
    } else if (time >= 11 && time <= 14) {
        return '점심';
    } else if (time >= 17 && time <= 20) {
        return '저녁';
    } else if (time >= 21 && time <= 23) {
        return '야식';
    } else {
        return '금식';
    }
}
//------------------------------------------------------------------------
const getMealByTime = (time) => {
    if(time >= 6 && time <= 10) {
        return '아침';
    } else if (time >= 11 && time <= 14) {
        return '점심';
    } else if (time >= 17 && time <= 20) {
        return '저녁';
    } else if (time >= 21 && time <= 23) {
        return '야식';
    } else {
        return '금식';
    }
}
//------------------------------------------------------------------------
*/
