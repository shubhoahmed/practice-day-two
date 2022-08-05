// Find largest number from three number no return
// function findLargest(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log('num1 is the largest number', num1);
//     }
//     else if (num2 > num1 && num2 > num3) {
//         console.log('num2 is the largest number', num2)
//     }
//     else {
//         console.log('num3 the largest number', num3)
//     }
// }
// findLargest(2, 3, 1);
// findLargest(5, 8, 3);
// findLargest(51, 8, 31);

// Find largest number from three number with return
function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log(findLargest(85, 32, 95));
console.log(findLargest(85, 32, 8));
console.log(findLargest(8, 32, 5));