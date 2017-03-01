function roll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function Player(name, total, currentScore, alert) {
    this.name = name;
    this.total = total;
    this.score = currentScore;
    this.alert = alert;
}

Player.prototype.addScore = function(score) {
    if (score !== 1) {
        this.score += score;
        return this.score;
    } else {
        this.alert += 1;
        return this.score = 0;
    }
}

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

var turn = 1;

function nextTurn() {
    turn++;
    return;
}

$(function() {
    var player1 = new Player("Alex", 0, 0, 0)
    var player2 = new Player("Lee", 0, 0, 1)

    $("#hold").click(function() {
        // debugger;
        nextTurn();
        if (isEven(turn) === true) {
            player1.total += player1.score;
            player1.score = 0;
            player2.score = 0;
            $("#player1").text(player1.total);
            $("#curScore").text(player1.score);
        } else if (isOdd(turn) === true) {
            player2.total += player2.score;
            player2.score = 0;
            player1.score = 0;
            $("#player2").text(player2.total);
            $("#curScore").text(player1.score);
        } else {
            console.log("cheese");
        }
    });

    $("#click").click(function() {
        var rollMe = roll(1, 7);

        player2.addScore(rollMe);
        player1.addScore(rollMe);
        $("#curScore").text(player1.score);
        if (isOdd(player1.alert)) {
            alert("You got 1!");
            this.alert += 1;
            turn++;
        } else {
            console.log("psshhh");
        }
    });
});
