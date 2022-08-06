// Declared an array 
let friendAge = [24, 23, 21, 26, 25, 27, 20, 19];
//find length of an array
let lengthOfArray = friendAge.length;
//get element or value by index
let element = friendAge[2];
//get index by element or value
let index = friendAge.indexOf(25);
//add element to last 
friendAge.push(64);
friendAge.push(40);
//remove element from array
friendAge.pop();

const ageNextYear = [];
// ageNextYear.push(element);
// console.log(ageNextYear);

let sum = 0;
for (let i = 0; i < friendAge.length; i++) {
    let index = i;
    let arrEle = friendAge[index];
    if (arrEle % 2 == 1) {
        ageNextYear.push(arrEle);
        sum = sum + arrEle;
    }
}


console.log(ageNextYear);
console.log(sum);