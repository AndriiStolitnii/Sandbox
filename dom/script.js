var units = document.getElementsByClassName("unit");
var unitsQueried = document.querySelectorAll("unit");
var wrapper = document.querySelector(".wrapper");
var wrappUnits = wrapper.getElementsByClassName("unit");

var newDiv = document.createElement("div");
wrapper.appendChild(newDiv);

// console.log(wrappUnits[0].hasAttribute("key"));
// console.log(wrappUnits[0].getAttribute("key"));
// console.log(wrappUnits[1].setAttribute("key", "fvg"));
// console.log(wrappUnits[1].attributes);

setTimeout(function() {
    newDiv.setAttribute("test", 'omg');
}, 5000);

newDiv.innerHTML = "<span>Hello world!</span>";

console.log(newDiv);

newDiv.classList.add('a', 'b', 'c');

console.log(newDiv.classList);

console.dir(newDiv.classList);