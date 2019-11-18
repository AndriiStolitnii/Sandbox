var tasks = [],
    speed = 2000;

tasks.push(function () {
    console.log('Hello');
})

tasks.push(function () {
    console.log('World');
})

// var timerId = setTimeout(function callback() {
//     tasks.forEach(function () {

//     })
// };

var users = [
    {
        name: 'Vasya',
        salary: 5000
    },
    {
        name: 'Veniamin',
        salary: 9000
    }
];

function each(arr, callback) {
    if (!callback) return;
    for (i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}


var arr = [2, 3, 4, 5, 6];

var newArr = arr.map(function(value) {
    return value ** 2;
})

function map(arr, cb) {
    if (!cb) return arr.slice();
    var newArr = [];
    for ( var index = 0; index < arr.length; index++) {
        var result = cb(arr[index], index, arr);
        newArr[index] = result;
    }
    return newArr;
}

var myOwnArr = map(arr, function(value) {
    return value ** 2;
})

console.log(arr, newArr, myOwnArr);