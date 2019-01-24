/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
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
      "text": "If I have seen further it is by standing on the shoulders of giants asd asd asd asd asd asd asd asd asd "
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461813796368
  }
];

function createTweetElement(tweetData){
  const days = (Math.round((((Date.now()) - (Number(tweetData.created_at))) / 1000) / 86400));
  const $tweet = `
  <article class="tweet-container">

        <header class="header">
          <img src=${tweetData.user.avatars.small} name="avatar">
          <p class="namePerson" name="namePerson">${tweetData.user.name}</p>
          <p class="idPerson" name="idPerson">${tweetData.user.handle}</p>          
        </header>
        
        <p class="message" name="message">${tweetData.content.text}</p>
        
        <footer class="footer">
          <p name="timeAgo">${days} Days Ago

          </p>
          <div class="icons">
            <img name="icon1" src="images/flag.png">
            <img name="icon2" src="images/retweet.png">
            <img name="icon3" src="images/heart.png">
          </div>
        </footer>

      </article>
  `;
  return($tweet);
  
}
let tweetContainer = $('#all-tweets');

function renderTweets(tweets) {
  console.log("renderTweets and tweets: ", tweets);

  tweetContainer.empty();
  for (let i = 0; i < tweets.length; i += 1){
    const tweet = createTweetElement(tweets[i]);
    console.log(tweet)
    tweetContainer.prepend(tweet);
  };

}

// renderTweets(data);


function getAllTweets(data) {
  // console.log("getAlltweets::", tweets);
  $.ajax({
    method: "GET",
    url: "/tweets/",
    dataType: 'json'
  }).done(function(data) {
    // console.log("AJAX getALLTWEETS, tweets: ", tweets);
    // tweets.forEach((tweet) => {
      // const element =  
      renderTweets(data);     
      // allTweets.prepend(element);
    // })
  });
}

// getAllTweets();

// post request from user
$("#tweets-maker").on('submit', function(event) {
  console.log("hit the button, event: ", event);
  // prevent the default behavor
  event.preventDefault();
  // get the data from the form
  // const content = $(this).find('input').val();
  // ajax post request
  const serialized = $(this).serialize();
  console.log("serialized: ", serialized);
  console.log("this: ", $(this));
  console.log("date", data);
  let form = this;
  // $("textarea", this).val("");
  $.ajax({    
    method: "POST",
    url: "/tweets",
    data: serialized
  }).done(function() {
    form.reset();
    // on success, refresh the creaks on the page
    console.log("AJAX #tweeter-maker", serialized);
    getAllTweets(serialized);
    // renderTweets(serialized);
    // getAllCreaks();    
    // getAllTweets();
  });
});