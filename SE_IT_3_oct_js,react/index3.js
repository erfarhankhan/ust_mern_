//3|oct|2025 = {friday },1st lecture from 8:30 to 12:20;


// let stroreInterval =setInterval(()=>{
//     console.log("m from setInterval");
    
// },2000);
// clearTimeout(stroreInterval)

// setTimeout(()=>{
//     console.log("bye interval");
//     clearInterval(stroreInterval)
    
// },9000);

///////////////////////////////////////////////////////////////////////////////////
// function getdata(dataId,nextData){
//     setTimeout(()=>{
//         console.log("dataId=> "+ dataId);
//         if(nextData){
//             nextData()
//         }
        
//     },2000);
// }
// getdata(10,()=>{
//     getdata(9,()=>{
//         getdata(8,()=>{
//             getdata(7)
//         })
//     })
// });
///////////////////////////////////////////////////////////////////////////////
// promise 
// ()=>{} //function
// function fun2() {
    
// }
// new Promise((resolve,rejec)=>{
//     if (false) {
//         resolve("resolve ur promise"); 
//     }else {
//         rejec(" reject ur promise")
//     }
// }).then((resolve)=>{ 
//     console.log("resolve 46,line "+ resolve);
    
// }).catch((reject)=>{
//     console.log("reject 49,line "+ reject);
    
// }).finally(()=>{
//     console.log("finally block ");
    
// })
// //////////////////////////////////////////////////////////////////
// let promise =function getdata(dataId,nextData){
//     return new Promise((resolve,reject)=>{
       
//       setTimeout(()=>{
//             if (true) {
//             resolve("resolve");
//             console.log(dataId+" dataId");
                
//             } else {
//                 reject("reject")
//             }
//             if (nextData) {
//                 nextData()
//             }
//       },2000)
//     });
// }
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3)
//     })
// })
/////////////////////////////////////
// promise(1).then((resolve)=>{
//     console.log(resolve+" resolve");
    
// }).catch((rej)=>{
//     console.log(rej+" rej");
    
// })

// promise(2).then((res)=>{
//     console.log("resolve "+res);
    
// })