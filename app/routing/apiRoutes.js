var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var userScore = req.body.scores;
        var scoreArr = [];
        var bestMatch = 0;

        for(var i = 0; i < friends.length; i++) {
            var diff = 0;

            for(var j = 0; j < userScore.length; j++) {
                diff += Math.abs(friends[i].score[j] - userScore[j]);
            }
            scoreArr.push(diff);
        }

        for(var i = 0; i < scoreArr.length; i++) {
            if(scoreArr[i] <= scoreArr[bestMatch]) {
                bestMatch = i;
            }
        }

        var bestFriend = friends[bestMatch];
        res.json(bestFriend);
    
    });
}
