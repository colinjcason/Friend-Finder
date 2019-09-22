var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, req) {
        function compare(friendOne, friendTwo) {
            var diff = 0;
            for(var i = 0; i < friendOne.length; i++) {
                if(friendOne[i] != friendTwo[i]) {
                    diff += Math.abs(friendOne[i] - friendTwo[i]);
                }
            }
            console.log(diff);
        }

    

    });
}

