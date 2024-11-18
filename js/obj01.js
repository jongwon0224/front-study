// obj01.js
// RUN CODE = ctrl + alt + n;

// 객체 : Object
// JSON : Javascript Object Notation
// {key : value}

let weatherInfo = {
    weather: '맑음',
    temp: 2,
    loc: 'Cheonan',
    scores: [
        'a', 'b', 'c', 'd'
    ]
}

console.log(weatherInfo.weather);
console.log(weatherInfo.temp);
console.log(weatherInfo.loc);
console.log(weatherInfo.scores[ 0 ]);
console.log('-------------------------------------')
// ----------------------------------------------------------------------------------------------
// 점심식사 정보 , 짜장면 , 5000, 대천반점, 천안시장내부
let lunchInfo = {
    menu: '짜장면',
    price: 5000,
    name: '대천반점',
    loc: '천안시장내부'
};

let shopInfo = {
    name: '대천반점',
    location: '천안시장내부',
    menu: { '짜장면': 8000, '짬뽕': 6000, '볶음밥': 9000 }
};

console.log(shopInfo.menu.짜장면);
console.log('----------------------------------------------------')

// for (price in shopInfo) {
//     console.log(shopInfo.menu[price]);
// }


console.log('----------------------------------------------------')


let shopInfo2 = {
    name: '대천반점',
    location: '천안시장내부',
    menu: [
        {
            name: '짜장면',
            price: 5000,
            raw: [ '춘장', '양파', '돼지고기' ]
        },
        {
            name: '짬뽕',
            price: 7000,
            raw: [ '오징어', '면', '고춧가루' ]
        },
        {
            name: '볶음밥',
            price: 7000,
            raw: [ '달걀', '당근', '감자' ]
        }
    ]
};
console.log(shopInfo2.menu[ 0 ].name); // 짜장면
console.log(shopInfo2.menu[ 0 ].price); // 5000
console.log(shopInfo2.menu[ 0 ].raw[ 0 ] + ',' + shopInfo2.menu[ 0 ].raw[ 1 ] + ',' + shopInfo2.menu[ 0 ].raw[ 2 ]); // 짜장면

console.log('----------------------------------------------------')

let shopINfo3 = [
    {
        name: '맘스터치',
        location: '천안길가에',
        menu: [
            {
                name: '싸이버거',
                price: 6000,
                raw: ['빵', '채소', '닭다리살']
            },
            {
                name: '휠렛',
                price: 7000,
                raw: ['빵', '채소', '닭가슴살']
            }
        ]
    },
    {
        name: '대천반점',
        location: '천안시장내부',
        menu: [
            {
                name: '짜장면',
                price: 5000,
                raw: ['춘장', '양파', '돼지고기']
            },
            {
                name: '짬뽕',
                price: 7000,
                raw: ['오징어', '면', '고춧가루']
            },
            {
                name: '볶음밥',
                price: 7000,
                raw: ['달걀', '당근', '감자']
            }
        ]
    }
];
// 휠렛버거의 가격
console.log(shopINfo3[0].menu[1].price); // 7000

// 볶음밥의 재료들
console.log(shopINfo3[1].menu[2].raw); //[ '달걀', '당근', '감자' ]

// 싸이버거에 닭다리살 재료
console.log(shopINfo3[0].menu[0].raw[2]); //닭다리살

// 대천반점의 장소
console.log(shopINfo3[1].location); // 천안시장내부