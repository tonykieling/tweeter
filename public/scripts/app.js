/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

function createTweetElement(tweetD){
  let $tweet = `
  <article class="tweet-container">

        <header class="header">
          <img src=${tweetData.user.avatars.small} name="avatar">
          <p class="namePerson" name="namePerson">${tweetData.user.name}</p>
          <p class="idPerson" name="idPerson">${tweetData.user.handle}</p>          
        </header>
        
        <p class="message" name="message">${tweetData.content.text}</p>
        
        <footer class="footer">
          <p name="timeAgo">${(Math.round((((Date.now()) - (Number(tweetData.created_at))) / 1000) / 86400))} Days Ago

          </p>
          <div class="icons">
            <img name="icon1" src="images/flag.png">
            <img name="icon2" src="images/retweet.png">
            <img name="icon3" src="images/heart.png">
          </div>
        </footer>

      </article>
  `;

  // let $tweet = $("<article>").addClass("tweet-container");
  // const header = $("<header>").addClass("header").appendTo($tweet);
  // const avatar = $("<img>").appendTo(header);
  // const name = $("<p>").appendTo(header).addClass("namePerson");
  // const id = $("<p>").appendTo(header).addClass("idPerson");
  // let $content = $("<p>").appendTo($tweet).addClass("message");
  // $content.text="text";
  // const footer = $("<footer>").appendTo($tweet);
  // const timeAgo = $("<p>").appendTo(footer);
  // const div = $("<div>").appendTo(footer).addClass("icons");
  // const icon1 = $("<img>").appendTo(div);
  // const icon2 = $("<img>").appendTo(div);
  // const icon3 = $("<img>").appendTo(div);
  return($tweet);
}


// function renderTweets(tweets) {
//   // loops through tweets
//     // calls createTweetElement for each tweet
//     // takes return value and appends it to the tweets container
  var $tweet = createTweetElement(tweetData);
// }


// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
console.log($('#tweets-container'));

// renderTweets(data);
