function getRandomColor() {
    var colors = ["qizil", "kok", "oq", "yashil", "sariq", "yashilkorang", "olovrang","moviy "];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

var randomColor = getRandomColor();
console.log("Sizning tasodifiy rangingiz;): " + randomColor);
