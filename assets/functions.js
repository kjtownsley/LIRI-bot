//                            FUNCTIONS

module.exports = {

    twitter: function(myInput) {
            var Twitter = require('twitter');
            var keys = require('../keys.js');
            var client = new Twitter(keys.twitter);
            var userName = "chad";

            if(myInput != undefined) {
                userName = myInput;
            }

                var params = {screen_name: userName, count: 20};
                client.get('statuses/user_timeline', params, function(error, tweets, response) {
                if (!error) {
                console.log("Here's the latest: ");
                                console.log("");
                                tweets.forEach(function(t) {
                                    console.log(t.text);
                                    console.log("");
                                });
        }
    });
 },
}