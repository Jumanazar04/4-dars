// Task-1
let N = 15;
function printLog(N){
    
    if( N > 1){
        printLog(N-1)
    }
    console.log("Hello World", N);
}
printLog(N);

// Task-2
function factorialValue(num){
    if(num === 0 ){
        return 1;
    }else{
        return num * factorialValue( num - 1 );
    }
}

console.log(factorialValue(7));

// Task-3
function summaValue(num){
    if(num === 0){
        return 0;
    }else{
        return num + summaValue(num - 1)
    }
}

console.log(summaValue(10));

// Task-4
function evenNumberSumma(num){
    if( num === 0){
        return 0 ;
    }
    if(num % 2 == 0 && num > 0){
        return num + evenNumberSumma(num - 2)
    }else{
        num--;
        return num + evenNumberSumma(num - 2)
    }
}
console.log(evenNumberSumma(8));

// Task-5
function oddNumberValue(num){
    if( num === 1){
        return 1;
    }
    if(num % 2 == 1){
        return num + evenNumberSumma(num - 2)
    }else{
        return num + evenNumberSumma(num - 1)
    }
}
console.log(oddNumberValue(12)); 

// Task-6, Task-8
let student = {
    firstName: "Jumanazar ",
    lastName: "Yusupov ",
    age: 19,
    group: "N54",
    rating: {
        month_1: 91,
        month_2: 100,
        month_3: 90, 
    },
    salomlashish: function(){
        console.log("Hello I'm " + this.firstName + this.lastName + "I'm " + this.age +
            "my rating " + this.rating.month_2 + "my group " + this.group
        );
    }
}
student.salomlashish();

// Task-7, Task-8
let myNotebook = {
    brand: "acer",
    windows: "Windows 11 pro",
    memory: 1000,
    ability: function(){
        console.log("My laptop brand is " + this.brand);
    }
}
myNotebook.ability();

// Task-9
function Student(name, age, lang, rating){
    this.name = name;
    this.age = age;
    this.lang = lang;
    this.rating = rating;
}

const badStudent = new Student("John", 20, "eng", 65);
const middleStudent = new Student("Jack", 22, "uz", 80);
const goodStudent = new Student("Tom", 19, "rus", 95);
console.log(badStudent);
console.log(goodStudent);
console.log(middleStudent);

function Person(name, age, isMarried, jobs){
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.jobs = jobs;
}

const anvar = new Person("Anvar", 25, true, "developer");
const bobur = new Person("Bobur", 24, false, "student");
const rustam = new Person("Rustam", 26, false, "teacher")
console.log(anvar);
console.log(bobur);
console.log(rustam);



