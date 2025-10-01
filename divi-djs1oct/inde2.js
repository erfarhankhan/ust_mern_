// function fun(){
//     return console.log("hi m from fun");
    
// }
// fun();

// let a = " m global ";


// function fun2(){
//     let b ="hi m from fun2 b ";
//     console.log("m b "+ b);
    
//     return console.log("h m from fun2 "+ a);
    
// }
// fun2();
// console.log("b"+ b);


///////////////////////////dead temp zone
// var a = " m global ";

// function fun2(){
//     let a = " m from inside fun2;"
//         return console.log("h m from fun2 "+ a);
        
//         let b ="hi m from fun2 b ";
//         console.log("m b "+ b);
    

    
// }
// fun2();
// console.log("b"+ b);

////////////////////////////////////


// function funa(){
//     return console.log("m from funa");
    
// }
// function funz(){
//     return funa();
// }

////////////////////callback ////////////
// function callback(a,b,) {
//     return console.log(a*b);
    
// }
// function sum(a,b,callback){
//     return callback(a,b)
// }
// sum(6,5,callback);
///////////////////////////////////////////////////
////////////////////////////deadtemp zone
// var z ="45678";
// var z = 12345
// z="fhgv";
// let x=6578;
// x="dfghj"


// let a = "abcd";

// function ab() {
//     let a = "sdfghjk"
//     return console.log("hi m from ab " + a);
    
// }


// ab()
// closure
function outerfun(){
    
    function innerfunOne() {
        let password ="asdfghj"
        return console.log("hi m from innerfunOne "+password);
        
    }
    function innerfunTwo() {
        return console.log("hi m from innerfunTwo "+password );
        
    }
     innerfunOne();
     innerfunTwo();
}
outerfun()

/////////////////////////////////////////////////////////////////////
// let storeinterval = setInterval(()=>{
//     console.log("lecture");
    
// },2000);

// setTimeout(()=>{
// clearInterval(storeinterval)
// },8000)//
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
