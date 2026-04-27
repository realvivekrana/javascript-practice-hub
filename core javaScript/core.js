//Q.1 Hositing (var)
// console.log(a);
// var a = 10;
// console.log(a);

//Q.2 Hositing (let)
// console.log(a);
// let a = 30;

//Q.3 Scope
// let a = 20;
// function test(){
//     let a = 30;
//     console.log(a);
// }
// test();
// console.log(a);


//Q.4 Call Stack Flow
// function one(){
//     console.log("One");
// }
// function two(){
//     one()
//     console.log("Two")
// }
// function three(){
//     two()
//     console.log("Three");
    
// }
// three();


//Q.5 Even or Odd
// let number = 50;
// if(number%2===0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }


//Q. Largest Two Number
// let a = 10;
// let b = 50;
// if(a>b){
//     console.log(a+" is the largest number");
// }else{
//     console.log(b+" is the largest number");
// }


//Q. Loop 1 to 5
// for(i=1; i<=5; i++){
//     console.log(i);
// }
// for(i=10; i>=2; i--){
//     console.log(i);
// }


// Q.8 Reverse Number
let num = 123;
let reverse = 0;
while(num > 0){
    let digit = num % 10; //last digit nikala
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10); //last digit hata diya
}
console.log(reverse)