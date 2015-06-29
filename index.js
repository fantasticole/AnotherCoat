var config = require('./config');
var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: config.twitterBot.cons_key,
	consumer_secret: config.twitterBot.cons_secret,
	access_token_key: config.twitterBot.access_token,
	access_token_secret: config.twitterBot.access_secret
});

var params = {screen_name: 'Hey_Cole'};

// client.get('statuses/user_timeline', params, function(err, tweets, res){
// 	if (!err){
// 		console.log(tweets[0].entities.text);
// 	}
// 	// if (err) throw err;
// });

// client.post('statuses/update', {status: 'fourth bot tweet!'}, function(err, tweet, res){
// 	if (err) throw err;
// 	console.log('Tweet: ', tweet.text); //tweet body.
// 	// console.log('Response: ', res); //Raw response object.
// });

function getTimeline(){
	client.get('statuses/user_timeline', params, function(err, timeline, res){
		if (!err){
			for (var tweet in timeline)
			console.log(timeline[tweet].text);
		}
		if (err) throw err;
	})
};

function sendTweet(text){
	client.post('statuses/update', {status: text}, function(err, tweet, res){
		if (err) throw err;
		console.log('Tweet: ', tweet.text);
	});
}

// sendTweet('fifth one, oh yeah baby!');
getTimeline();




