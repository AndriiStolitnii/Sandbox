var wordsAmount = 100,
    minCharsAmount = 2,
    maxCharsAmount = 10,
    alphabet = 'abcdefghijklmmopqrstuvwxyz',
    dictionary = {};
function random(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

for (var i = 0; i < wordsAmount; i++) {
    var word = '';
    var charsAmount = random(minCharsAmount, maxCharsAmount);
    for (var j = 0; j < charsAmount; j++) {
        var charIndex = random(0, alphabet.length - 1);
        word += alphabet[charIndex];
    }

    if (!dictionary[charsAmount]) {
        dictionary[charsAmount] = [];
    } 
    dictionary[charsAmount].push(word);
}

for (var key in dictionary) {
    console.log('You have ' + dictionary[key].length + ' words with ' + key + ' length');
}

