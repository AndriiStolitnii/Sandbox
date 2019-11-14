var a = 2,
    b = 3;

function sum(a, b) {
    return a + b;
}   

function logTime(a, b, fnc) {
    console.time();
    var res = fnc(a, b);
    console.timeEnd();
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



function asyncFnc(callback) {
    return setTimeout(function() {
        callback('Hello world!');
    }, 1000);
}

var resultOfTimeout = '';
//console.log('Hello!');
var intervalId = asyncFnc(function(result) {
    console.log('Hello!');
    console.log(result);
    console.log('World!');
});
//console.log('World!');
