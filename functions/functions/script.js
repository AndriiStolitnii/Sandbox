var a = 2,
    b = 3;

function sum(a, b) {
    return a + b;
}   

function logTime(func) {
    console.time()
    var res = func(a, b);
    console.timeEnd()
    return res;
}

function multiply(a, b) {
    return a * b;
}

var result = logTime(a, b, sum);

var result = sum(1, 2, 3, 4, 5);

function sum() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
}
