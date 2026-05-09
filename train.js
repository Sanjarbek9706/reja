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

//C-TASK

/*Shunday function tuzing, u 2ta string parametr ega bolsin,
 hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin. 
 MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true. */

// function matnBilanIshlash(str1, str2) {
//   console.log("Sanjarbek og'a:", str1);
//   if (
//     str1
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("") ===
//     str2
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const natija = matnBilanIshlash(
//   "og'a Sanjarbek",
//   "Sanjarbek og'a",
// );
// console.log("matn bir xilmi", natija);

/*D-TASK

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, 
biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin. 
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() 
return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud */

// class Shop {
//   constructor(
//     telifon,
//     kampyuter,
//     smart_achki,
//   ) {
//     this.products = {
//       telifon: telifon,
//       kampyuter: kampyuter,
//       smart_achki: smart_achki,
//     };
//   }
//   _getTime() {
//     const date = new Date();
//     return date
//       .toTimeString()
//       .slice(0, 5);
//   }
//   sotish(mahsulot, miqdor) {
//     if (
//       this.products[mahsulot] >= miqdor
//     ) {
//       this.products[mahsulot] -= miqdor;
//       console.log(
//         `Hozir ${this._getTime()}da ${miqdor}ta ${mahsulot} sotildi(';')`,
//       );
//     } else {
//       console.log(
//         `Hozir${this._getTime()}da ${mahsulot}dan yetarli miqdorda mavjud emas!`,
//       );
//     }
//   }

//   qoldiq() {
//     console.log(
//       `Hozir ${this._getTime()}da
//       ${this.products.telifon}ta telifon,
//       ${this.products.kampyuter}ta kampyuter va
//       ${this.products.smart_achki}ta smart_achki mavjud!`,
//     );
//   }
//   qabul(mahsulot, miqdor) {
//     this.products[mahsulot] += miqdor;
//     console.log(
//       `Hozir
//       ${this._getTime()}da
//       ${miqdor}ta
//       ${mahsulot} qabul bo'ldi!`,
//     );
//   }
// }

// const shop = new Shop(8, 7, 4);
// shop.qoldiq();
// shop.sotish("smart_achki", 20);
// shop.sotish("telifon", 20);
// shop.sotish("kampyuter", 25);
// shop.qabul("kampyuter", 6);
// shop.qabul("smart_achki", 5);
// shop.qabul("telifon", 9);

// shop.qoldiq();

/* E-TASK

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
 MASALAN: getReverse("hello") return qilsin "olleh". */

// let text = "goodmorning";
// let reversed = text
//   .split("")
//   .reverse()
//   .join("");
// console.log(reversed);

// function getReverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
// console.log(getReverse("안녕하세요"));

/* F-TASK

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, 
qatnashmasa false qaytarishi kerak. MASALAN: getReverse("hello") return true return qiladi. */

// let soz = "hello";
// let harf = "l";

// function findDoublers(soz, harf) {
//   if (
//     soz.indexOf(harf) !==
//     soz.lastIndexOf(harf)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(findDoublers(soz, harf));

/* G-TASK

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function
 bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
 MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini. */

function getHighestIndex(arr) {
  let max = arr[0];
  let highesIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      highestIndex = i;
    }
  }
  return highestIndex;
}
console.log(
  getHighestIndex([5, 25, 17, 29, 35]),
);

// reja: loyihasi diploy qilindi!
http://93.188.166.198:3009/