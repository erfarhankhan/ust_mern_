// var a = "45678";////
// // var a ="h";
// a=6;
// console.log(a);

// let a = "4568";
//  a = 7;
 // console.log(a);
//  const a =567890;
//  const a ="fb";
//  a="ghh";


///////////////////////////////////////////////////
// ..function 
// function fun(){
//     return console.log("hi m from fun ");
    
// }
// fun();


///////////////////////////////////////
//    function callback(a,b) {
//     return console.log(a+b);
    
// }
// function sum(a,b,callback) {
 
//     return callback(a,b)
// }
// sum(6,7,callback);
/////////////////////////////////////////
// ..closure 
// let x ="global"; 
function outerfun(){

   
    function innerOne() {
         let x = "inner";
        return console.log("hi m from innerOne "+x);
        
    }
    function  innerTwo() {
        return console.log("hi m from innerTwo"+ x);
        
    }
    innerOne();
    innerTwo();

}
// outerfun()
////////////////////////////deadtemp zone


/////////////////////////////////////////////////////////////////////
// setTimeout(()=>{
// console.log("hi m start from 58 line");
// console.log("hi m start from 59 line");
// console.log("hi m start from 60 line");
// console.log("hi m start from 61 line");
// console.log("hi m start from 62 line");

// },3000)
// console.log("hi m start from 65 line");
// console.log("hi m start from 66 line");
// console.log("hi m start from 67 line");
// console.log("hi m start from 68 line")

let storeinterval = setInterval(()=>{
    console.log("m from setTimeout");
    
},2000)
setTimeout(()=>{
    console.log("bye bye setinterval");
    
    clearInterval(storeinterval);
},8000);
////////////////////////////////////////

// function myfunexport() {
//     console.log("my funexport");
    
// }
// export default myfunexport();
// let a ="hjk"
// str="12345"
//alpha = "2345"
//b = 2233
// f = 6.6
// print("hello ")
// let arr = [1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]+" arr[i]");
    
// }
// console.log("new line");

//////////////////////
// arr.forEach((arr)=>{
//         console.log(arr );
        
// })
