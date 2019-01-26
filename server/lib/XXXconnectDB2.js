"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

const db = MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // We have a connection to the "tweeter" db, starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // ==> Refactored and wrapped as new, tweet-specific function:

  let returnVar;

  function getTweets(callback) {
    // db.collection("tweets").find().toArray(callback);
    returnVar = db.collection("tweets").find({}, {"_id":0}).toArray(callback);
  }

  // // ==> Later it can be invoked. Remember even if you pass
  // //     `getTweets` to another scope, it still has closure over
  // //     `db`, so it will still work. Yay!

  getTweets((err, tweets) => {
    if (err) throw err;

    // console.log("Logging each tweet:");
    // for (let tweet of tweets) {
    //   // console.log(tweet);
    // }
    // tweetsReturn = tweets;
    db.close();
  });

  return returnVar;

});

module.exports = db;