
// const fetch = require("node-fetch");



// // // // var keepsHisWord;
// // // // keepsHisWord = false;
// // // // promise1 = new Promise(function(resolve, reject) {
// // // //   if (keepsHisWord) {
// // // //     resolve("The man likes to keep his word");
// // // //   } else {
// // // //     reject("The man doesnt want to keep his word");
// // // //   }
// // // // });
// // // // console.log(promise1);

// // // // promise2 = new Promise(function(resolve, reject) {
// // // //     setTimeout(function() {
// // // //       resolve({
// // // //         message: "The man likes to keep his word",
// // // //         code: "aManKeepsHisWord"
      
// // // //       });
// // // //       console.log("inside");
// // // //     }, 10 * 1000);
// // // //   });
// // // //   console.log(promise2);
// // // //   console.log("hey");
 
//  async function f1()
//  {
//     const a= fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(a);

   

// }

//  function f2()
// {
//     console.log("f2")
 
// }

//   function f3()
// {
//      f1();
//    f2();
 
// }
//  f3();

// // var momsPromise = new Promise(function(resolve, reject) {
// //     momsSavings = 20000;
// //     priceOfPhone = 60000;
// //     if (momsSavings > priceOfPhone) {
// //       resolve({
// //         brand: "iphone",
// //         model: "6s"
// //       });
// //     } else {
// //       reject("We donot have enough savings. Let us save some more money.");
// //     }
// //   });momsPromise.then(function(value) {
// //     console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
// //   });momsPromise.catch(function(reason) {
// //     console.log("Mom coudn't buy me the phone because ", reason);
// //   });momsPromise.finally(function() {
// //     console.log(
// //       "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
// //     );
// //   });

// // function getRandomNumber(start = 1, end = 10) {
// //     //works when both start and end are >=1
// //     return (parseInt(Math.random() * end) % (end - start + 1)) + start;
// //   }var promiseTRRARNOSG = (promiseThatResolvesRandomlyAfterRandomNumnberOfSecondsGenerator = function() {
// //     return new Promise(function(resolve, reject) {
// //       let randomNumberOfSeconds = getRandomNumber(2, 10);
// //       setTimeout(function() {
// //         let randomiseResolving = getRandomNumber(1, 10);
// //         if (randomiseResolving > 5) {
// //           resolve({
// //             randomNumberOfSeconds: randomNumberOfSeconds,
// //             randomiseResolving: randomiseResolving
// //           });
// //         } else {
// //           reject({
// //             randomNumberOfSeconds: randomNumberOfSeconds,
// //             randomiseResolving: randomiseResolving
// //           });
// //         }
// //       }, randomNumberOfSeconds * 1000);
// //     });
// //   });var testProimse = promiseTRRARNOSG();
// //   testProimse.then(function(value) {
// //     console.log("Value when promise is resolved : ", value);
// //   });
// //   testProimse.catch(function(reason) {
// //     console.log("Reason when promise is rejected : ", reason);
// //   });// Let us loop through and create ten different promises using the function to see some variation. Some will be resolved and some will be rejected. for (i=1; i<=10; i++) {
// //     let promise = promiseTRRARNOSG();
// //     promise.then(function(value) {
// //       console.log("Value when promise is resolved : ", value);
// //     });
// //     promise.catch(function(reason) {
// //       console.log("Reason when promise is rejected : ", reason);
// //     });
  

const {multi,add,fet}=require("E:/work/npmPackage/index.js");
console.log(multi(2,300));
console.log(add(2,3));
fet();

