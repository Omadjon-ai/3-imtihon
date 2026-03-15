// 1-masala function hosil qiling. u n sonini qabul qiladi function bizga 1dan n sonigacha bolgan sonlar yegindisini hisoblab qaytarsin  n>1

// function yigindi(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(yigindi(5));

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
// 2-masala funcion hosil qiling getRandom nomli ikkita parametr qabul qiladi. shular orasidagi random son qaytarin  ichida avval qaysi biri max qaysi biri min ekanigini aniqlab olsin

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
// 3 masala function uchun xonalik son qabul qiladi. maslan 111 => qaytarsin "bir yuz o'n bir"  swtich blan

// function sonSoz(num) {
//   let yuz = Math.floor(num / 100);
//   let on = Math.floor((num % 100) / 10);
//   let bir = num % 10;

//   let result = "";

//   switch (yuz) {
//     case 1:
//       result += "bir yuz ";
//       break;
//     case 2:
//       result += "ikki yuz ";
//       break;
//     case 3:
//       result += "uch yuz ";
//       break;
//     case 4:
//       result += "to'rt yuz ";
//       break;
//     case 5:
//       result += "besh yuz ";
//       break;
//     case 6:
//       result += "olti yuz ";
//       break;
//     case 7:
//       result += "yetti yuz ";
//       break;
//     case 8:
//       result += "sakkiz yuz ";
//       break;
//     case 9:
//       result += "to'qqiz yuz ";
//       break;
//   }

//   switch (on) {
//     case 1:
//       result += "o'n ";
//       break;
//     case 2:
//       result += "yigirma ";
//       break;
//     case 3:
//       result += "o'ttiz ";
//       break;
//     case 4:
//       result += "qirq ";
//       break;
//     case 5:
//       result += "ellik ";
//       break;
//     case 6:
//       result += "oltmish ";
//       break;
//     case 7:
//       result += "yetmish ";
//       break;
//     case 8:
//       result += "sakson ";
//       break;
//     case 9:
//       result += "to'qson ";
//       break;
//   }

//   switch (bir) {
//     case 1:
//       result += "bir";
//       break;
//     case 2:
//       result += "ikki";
//       break;
//     case 3:
//       result += "uch";
//       break;
//     case 4:
//       result += "to'rt";
//       break;
//     case 5:
//       result += "besh";
//       break;
//     case 6:
//       result += "olti";
//       break;
//     case 7:
//       result += "yetti";
//       break;
//     case 8:
//       result += "sakkiz";
//       break;
//     case 9:
//       result += "to'qqiz";
//       break;
//   }

//   return result;
// }

// console.log(sonSoz(161));

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
// 4-masala function xosil qiling sonning polindrome ekanligini aniqlasin bunda istalgan honalik son bolishi mumkin => true yoki false qaytarsin  while bilan  ishlansin

//
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
// 5 function son qabul qiladi uni tub yoki tub emasligini aniqlab qaytarsin.

// function tubSon(n) {
//   if (n <= 1) return "tub emas";

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return "tub emas";
//     }
//   }

//   return "tub son";
// }

// console.log(tubSon(63));

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
// 6 function hosil qiling u Math.sign() methodini vazifasini bajarsin ichida Math.sign() ishlatilinmasin

// function sign(n) {
//   if (n > 0) return 1;
//   if (n < 0) return -1;
//   return 0;
// }

// console.log(sign(-5));

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
// 7 function hosil qiling u Math.pow() ni vazifasini bajarsin ichida Math.pow ishlatilinmasin.

// function pow(a, b) {
//   let result = 1;

//   for (let i = 0; i < b; i++) {
//     result *= a;
//   }

//   return result;
// }

// console.log(pow(2, 3));

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
//8-masala Birinchi harfni katta qilish  shunday function yozing soznign birinchi harfini katta harf qilib bersin unda charAt() toUpperCase() va slice() methodlaridan togri foydalaning

// function kattaHarf(harf) {
//   return harf.charAt(0).toUpperCase() + harf.slice(1);
// }

// console.log(kattaHarf("salom"));

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
// 9  function tuzing unga string va harf beriladi. o'sha harf  stringda necha marta qatnashganini qaytarsin.

// function harfSoni(matn, harf) {
//   let takror = 0;

//   for (let i = 0; i < matn.length; i++) {
//     if (matn[i] === harf) {
//       takror++;
//     }
//   }

//   return takror;
// }

// console.log(harfSoni("saloaaaaam", "a"));

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
// 10 kabisa yilini aniqlaydigan function hosil qiling.
// Kabisa yili â€” Grigoriy taqvimida 366 kundan iborat boâ€˜lib, fevral oyiga bir kun (29-fevral) qoâ€˜shiladigan yildir. Bu yil har toâ€˜rt yilda bir marta keladi, oâ€˜rtacha quyosh yili va kalendar yili oâ€˜rtasidagi farqni (taxminan 6 soat) tuzatish uchun xizmat qiladi. 4 ga qoldiqsiz boâ€˜linadigan yillar odatda kabisa yili hisoblanadi.
// Wikipedia
// Wikipedia
//  +2
// Kabisa yilini aniqlash qoidalari:
// 4 ga boâ€˜linadigan yillar: Agar yil raqami 4 ga boâ€˜linsa, u kabisa yili hisoblanadi (masalan, 2024, 2028, 2032).
// 100 ga boâ€˜linadigan yillar (istisno): Agar yil 100 ga boâ€˜linsa, lekin 400 ga boâ€˜linmasa, u kabisa yili boâ€˜lmaydi (masalan, 1700, 1800, 1900, 2100).
// 400 ga boâ€˜linadigan yillar: Agar yil 400 ga boâ€˜linsa, u kabisa yili hisoblanadi (masalan, 2000, 2400)

function kabisa(yil) {
  if (yil % 400 === 0) {
    return "kabisa yili ekan";
  }
  if (yil % 100 === 0) {
    return "kabisa yili emas";
  }
  if (yil % 4 === 0) {
    return "kabisa yili ekan";
  }
  return "kabisa yili emas";
}

console.log(kabisa(2021));

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=
