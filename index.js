var config = require('./config');
var Twitter = require('twitter');
var fs = require('fs');
var colors = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var client = new Twitter({
	consumer_key: config.twitterBot.cons_key,
	consumer_secret: config.twitterBot.cons_secret,
	access_token_key: config.twitterBot.access_token,
	access_token_secret: config.twitterBot.access_secret
});

var params = {screen_name: 'Hey_Cole'};

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

function randomizer(obj){
    var keys = Object.keys(obj);
    var coll = keys[ keys.length * Math.random() << 0];
    return coll;
};

function generateTweet(obj){
	var collection = randomizer(obj);
    console.log('collection: ', collection);
	var color = randomizer(obj[collection]);
	console.log('color: ', color);
	var brand = obj[collection][color];
	console.log('brand: ', brand);
	var tweet = color + ' by ' + brand + ' from the ' + collection + ' Collection.'
	if (tweet.length <= 140){
		return tweet;
	}
	else{
		generateTweet(obj);
	}
};

// sendTweet('fifth one, oh yeah baby!');
// getTimeline();
// randomizer(colors[randomizer(colors)]);
console.log(generateTweet(colors));




