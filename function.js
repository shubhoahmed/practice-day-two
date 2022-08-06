//Has return has parameter 
function odd_even(n) {
    if (n % 2 == 0) {
        return ('Event');
    }
    else {
        return ('Odd')
    }
}
const number = odd_even(46);
console.log('This is an ', number);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let element = arr[4];
let index = arr.indexOf(9);
console.log(arr, 'Element: ', element, 'This is an index: ', index);
