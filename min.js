function min(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }

    else {
        return c;
    }
}

let result = min(155, 51, 14);
console.log(result);