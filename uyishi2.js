var qiymat = prompt("Istalgan sonni kiriting:");
qiymat = parseFloat(qiymat);

if (isNaN(qiymat)) {
    alert("Noto'g'ri qiymat kiritildi.");
} else if (qiymat % 2 === 0) {
    alert("Juft son");
} else {
    alert("To'q son");
}
