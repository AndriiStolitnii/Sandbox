var circleMover = move(document.querySelector('.circle')),
    squareMover = move(document.querySelector('.square'));

console.log(circleMover, squareMover);

setTimeout(function () {
    circleMover.right(100);
    squareMover.left(100);
    circleMover.up(200);
    squareMover.down(200);

    setTimeout(function () {
    circleMover.left(350);
    squareMover.right(350);
    circleMover.down(350);
    squareMover.up(350);
    }, 700)

}, 500)


