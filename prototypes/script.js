// function connection() {
//     var users = 0;
//     return function() {
//         return ++users;
//     }
// }

// var connect = connection();

// console.log(connect());
// console.log(connect());
// console.log(connect());
// console.log(connect());
// console.log(connect());
// console.log(connect());
// console.log(connect());
// console.log(connect());
// console.log(connect());
// console.log(connect());

// var connection = (function() {
//     var users = 0;
//     return {
//         inc: function() {
//             return ++ users;
//         },
//         dec: function() {
//             return --users;
//         },
//         reset: function() {
//             return users = 0;
//         },
//         getUsers: function() {
//             return users;
//         }
//     }
// }());

// connection.inc();
// connection.inc();
// connection.inc();
// connection.inc();
// connection.inc();

// var usersAmount = connection.getUsers();

// console.log(usersAmount);

function func(a, b) {
    return a + b;
}

function sum() {
    return Array.prototype.reduce.apply(arguments,)
}

var numbers = [2, 3];

console.log(func.apply(undefined, numbers));