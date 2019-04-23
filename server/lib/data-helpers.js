"use strict";

// Simulates the kind of delay we see with network or filesystem operations
// const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      callback(null, true);
    },

    // It gets data from MongoDB
    getTweets: function(callback) {
      db.collection("tweets").find().sort( {created_at: 1}).toArray(callback); //descending
      // db.collection("tweets").find().toArray(callback);
    }    

  };
}
