// Задание 1
let str = "Привет";
let num = 123;
let flag = true;
let txt = "true";

console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof flag); // boolean
console.log(typeof txt); // string

// Задание 2
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;

console.log(a1, a2, a3, a4); // 8, 2, 15, 1.6666666666666667

// Задание 3
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6, a7, a8, a9, a10); // 2, 3, "53", 2, "75кг"

// Задание 4
let height = 23;
let width = 10;
let s = height * width;

console.log(s); // 230

// Задание 5
let heightC = 10;
let dC = 4;
let radiusC = dC / 2;
let v = Math.PI * Math.pow(radiusC, 2) * heightC;

console.log(v); // 125.66370614359172

// Задание 6
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));

console.log(k); // 5

// Задание 7
let nFib = 12;
let phi = (1 + Math.sqrt(5)) / 2;
let el12 = Math.round(Math.pow(phi, nFib - 1) / Math.sqrt(5));

console.log(el12); // 144

// Задание 8
let S = 2e6; // 2 млн. рублей
let p = 10; // 10%
let years = 5;
let perepl = S * (p / 100) * years;

console.log(perepl); // 1000000

// Вывод результатов на страницу
document.getElementById('results').innerHTML = `
    <p>№1: ${typeof str}, ${typeof num}, ${typeof flag}, ${typeof txt}</p>
    <p>№2: ${a1}, ${a2}, ${a3}, ${a4}</p>
    <p>№3: ${a6}, ${a7}, ${a8}, ${a9}, ${a10}</p>
    <p>№4: ${s}</p>
    <p>№5: ${v}</p>
    <p>№6: ${k}</p>
    <p>№7: ${el12}</p>
    <p>№8: ${perepl}</p>
`;
