function findOppositeNumber (n, InputNumber) {
    if (n % 2 == 1) return;
    else return (InputNumber + n / 2) % n;
}

console.log (findOppositeNumber(10, 2));
console.log (findOppositeNumber(10, 6));
console.log (findOppositeNumber(10, 5));
console.log (findOppositeNumber(10, 3));