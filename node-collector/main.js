var Twit = require('twit')

var Twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000,
  strictSSL: false,
});

var stream = Twitter.stream('statuses/filter', { track: ['#sunphp20'] })

stream.on('tweet', function (tweet) {
    console.log(tweet)
})

stream.on('disconnect', function (disconnectMessage) {
    console.log(`ups something went wrong...${disconnectMessage}`)
})

stream.on('connect', function (request) {
    console.log('connection to Twitter...');
})

stream.on('connected', function (response) {
    console.log('connected to Twitter.');
})