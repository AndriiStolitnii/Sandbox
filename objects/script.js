var card = {
    name: 'Test',
    date: '04.11.2019',
    description: 'Test description',
    active: true,
    position: 0
};
//cardName = 'My card';

//card.name = 'Test';
//card.date = '04.11.2019';
//card.description = 'Test description';
//card.active = true;
//card.position = 0;
//card.name = cardName;
//card[cardName] = cardName;

//const cardList = [];
//cardList[cardList.length] = card;
//cardList.push(card);
//var stringList = ['a', 'b', 'c'];

//stringList.splice(1, 1);

//console.log(stringList);

//for (var key in card) {
    //console.log(key, card[key]);
//}

var customObj = Object.create(Object.prototype, {
    closed: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: 'private data'
    }
})

for (var key in customObj) {
    console.log(key, card[key]);
}