function averagescore() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var total = score.reduce(function (sum, score) { return sum + score; }, 0);
    return total / score.length;
}
;
console.log(averagescore(40, 50, 6, 60, 80));
