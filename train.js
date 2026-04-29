// 21. NodeJS event loop va Callback functionlarni o'rganamiz

/*  Dars rejasi
NodeJS - Single Therad  hamda Multi Process dasturlash

Asynchronous dasturlash:  Callback functionlar

Callback amallarni NodeJS  backend serverda ahamiyati */

// noddejs single thread => thread poollar  kami 4ga bolinadi

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yahshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// // Callback

// function maslahatBering(a, callback) {
//   if (typeof a !== "number")
//     callback("insert a number", null);
//   else if (a <= 20)
//     callback(null, list[0]);
//   else if (a > 20 && a <= 30)
//     callback(null, list[1]);
//   else if (a > 30 && a <= 40)
//     callback(null, list[2]);
//   else if (a > 40 && a <= 50)
//     callback(null, list[3]);
//   else if (a > 50 && a <= 60)
//     callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
//  console.log("passed here 0");
// maslahatBering(30, (err,  data) => {
//     if(err) console.log('ERROR', err);
//     console.log("javob", data);
// });
// console.log("passed here 1");

/*  22. Asynchronous functionlarni qo'llash 

  Dars rejasi
  Asynchronous dasturlash: Asynchronous functionlar

  Asynchronous dasturlash: Promise functionlar

  Callback vs Asynchronous vs Promise */

//ASYN function
// async function maslahatBering(a) {
//   if (typeof a !== "number")
//     throw new Error(
//       "insert a number",
//       null,
//     );
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30)
//     return list[1];
//   // callback(null, list[1]);
//   else if (a > 30 && a <= 40)
//     return list[2];
//   // callback(null, list[2]);
//   else if (a > 40 && a <= 50)
//     return list[3];
//   // callback(null, list[3]);
//   else if (a > 50 && a <= 60)
//     return list[4];
//   // callback(null, list[4]);
//   else {
//     // return list[5];
//     return new Promise(
//       (resolve, reject) => {
//         setTimeout(function () {
//           return list[5];
//         }, 5000);
//       },
//     );
//   }
// }
//  console.log("passed here 0");
//  maslahatBering(25).then(data => {
//    console.log("javob", data);
// .catch((err) =>  {
//     console.log('ERROR', err);
// });
// console.log("passed here 1");

// function maslahatBering(a, callback) {
//   if (typeof a !== "number")
//     callback("insert a number", null);
//   else if (a <= 20)
//     callback(null, list[0]);
//   else if (a > 20 && a <= 30)
//     return list[1];
//   else if (a > 30 && a <= 40)
//     return list[2];
//   else if (a > 40 && a <= 50)
//     return list[3];
//   else if (a > 50 && a <= 60)
//     return list[4];
//   else {
//     setTimeout(function () {
//       return list[0];
//     }, 5000);
//   }
// }

// await async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(30);
//   console.log(javob);
//   javob = await maslahatBering(42);
//   console.log(javob);
// };
// run();

// // A-Task
// function harfsana(harf, matn) {
//   return matn.split(harf).length - 1;
// }
// console.log(harfsana("a", "sanjarbek"));

// B- Task

// function countDigits(string) {
//   let count = 0;
//   for (
//     let a = 0;
//     a < string.length;
//     a++
//   ) {
//     if (
//       !isNaN(string[a]) &&
//       string[a] !== " "
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// const natija = countDigits(
//   "saoijfijf438743tgfjn",
// );
// console.log("Raqamlar soni:", natija);
