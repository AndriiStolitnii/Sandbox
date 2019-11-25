var values = [1, 2, 3, 4, 5];

var casino = {
    lines: [],
    result: null,
    createRandomLineFrom(arr) {
        return arr.map(function () {
            return Math.ceil(Math.random() * (arr.length - 1))            
        })
    },
    fillLines: function(linesAmount, fromArray) {
        var self = this;
        this.lines = Array(linesAmount).fill(1).map(function () {
            return self.createRandomLineFrom(fromArray);
        })
    },
    checkLines: function() {
        var index = (this.lines[0].length - 1) / 2,
            value = this.lines[0][index];
        return this.result = this.lines.every(function (line) {
            return line[index] === value;
        })
    },
} 


