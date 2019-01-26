"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  console.log("typeof(db): ", typeof(db));
  console.log("server/lib/data-helpers.js");
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      console.log("saveTweets - server/lib/data-helpers.js");
      console.log("newTweet: ", newTweet);
      // db.tweets.push(newTweet);
      db.collection("tweets").insertOne(newTweet);
      callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    // getTweets: function(callback) {          
    //   console.log("getTweets - server/lib/data-helpers.js");
    //   const sortNewestFirst = (a, b) => a.created_at - b.created_at;
    //   callback(null, db.tweets.sort(sortNewestFirst));
    // }

    getTweets: function(callback) {  
      db.collection("tweets").find().toArray(callback); //, {"_id":0}).toArray(callback);
    }    

  };
}
