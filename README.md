# TweetCrow

TweetCrow is a tweet reader that count how many tweets a user does against a particular hashtag.

## Disclaimer please read before use

***This is not an optimized nor a production ready code. These project was done for educational purpuse and might not be using best practices or ideal architecture.***

## Get started

```shell
# running the collector locally.
docker run -ti --rm -p 1337:1337 \
    --env TWITTER_CONSUMER_API_KEY \
    --env TWITTER_CONSUMER_SECRET_KEY \
    --env TWITTER_ACCESS_TOKEN \
    --env TWITTER_ACCESS_TOKEN_SECRET \
    ar4mirez/tweetcrow-node-collector:dirty

# You can also pass an .env
docker run -ti --rm -p 1337:1337 --env-file node-collector/.env ar4mirez/tweetcrow-node-collector:dirty
```
