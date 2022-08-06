
function checkAge(age) {
    if (age >= 18) {
        return ('Access Granted');
    } else {
        return ('Do you have permission from your parents?');
    }
}
let age = 15;
const result = checkAge(age);
console.log(result);


function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i);  // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let element = arr[4];
let index = arr.indexOf(9);
console.log(arr, 'Element: ', element, 'This is an index: ', index);
