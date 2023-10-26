
let random = Math.floor(Math.random() * 100 + 10);

if (random === 0) {
    console.log("juft son emas , toq son ham emas: " ,random ) }
if (random % 2 === 0) {
    console.log("musbat ,  " ,random )
} else {
    console.log("Manfiy ,  " ,random ) 
}




var qiymat = prompt("Istalgan qiymatni kiriting:");
qiymat = parseFloat(qiymat);

if (isNaN(qiymat)) {
    alert("Noto'g'ri qiymat kiritildi.");
} else if (qiymat > 0) {
    alert("Musbat qiymat");
} else if (qiymat < 0) {
    alert("Manfiy qiymat");
} else {
    alert("Nol");
}



// let random = 4;

// switch (random){
//     case 0 : {
//         console.log ("nol chiqdi")
//         break;
//     }

//     case 1:
//     case 2:
//     case 3:
//     case 4: {
//         console.log ("yomon")
//         break;
//     }
//     default: {
//         console.log ("boshqa son chiqdi")
//     }
// }

// if (random === 0 ) {
// console.log ("nol chiqdi");
// }else if (random === 1 || random  === 2 || random === 3) {
//     console.log("yomon");
// } else {
// console.log ("boshqa son chiqdi")
// }


//var son = 444;
//
//if (son > 0) {
//    console.log("Bu son musbat.");
//} else if (son < 0) {
//    console.log("Bu son manfiy.");
//} else {
//    console.log("Bu son nolga teng.");
//}



