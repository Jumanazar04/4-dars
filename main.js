// Task-1

// While -1
let A = 45;
let B = 14;
while( B <= A ){
    console.log(B);
    B++
}

// While-2
let joylar = 0;
let A_1 = 12;
let B_1 = 5;
while(A_1 >= B_1){
    A_1 -= B_1
    joylar++
}
console.log(joylar);

// While-3
let N = 416;
let K = 15;
let bolinganSon = 0;
while(N >= K){
    N -= K;
    bolinganSon++
}
console.log("Bo\'lingan son:", bolinganSon, "qoldiq:", N);

// While-4
let daraja = 1;
let n = 27;
while(daraja < n){
    daraja *= 3;
}
if (daraja == n) {
    console.log('ok');
}else(
    console.log('no')
)

// Task-2
let num = prompt('Son kiriting:', 1);
num -= 0;
switch (num) {
    case 1: alert("Yanvar")
        break;
    case 2: alert("Fevral")
        break;
    case 3:alert("Mart")
        break;
    case 4:alert("Aprel")
        break;
    case 5:alert("May")
        break;
    case 6:alert("Iyun")
        break;
    case 7:alert("Iyul")
        break;
    case 8:alert("Avgust")
        break;
    case 9:alert("Sentabr")
        break;
    case 10:alert("Oktabr")
        break;
    case 12:alert("Noyabr")
        break;
    case 12:alert("Dekabr")
        break;       
    default: alert("Bunday oy yoq")
        break;
}

// Task-3
let sum = 0;
let raqam = 0;

do{
    raqam++
    sum += raqam
}while( raqam <= 20)
console.log(sum);

