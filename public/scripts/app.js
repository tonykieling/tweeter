
$(function (){
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
    for (let i = 0; i < tweets.length; i += 1){
      const tweet = createTweetElement(tweets[i]);
      tweetContainer.prepend(tweet);
    };
  }


  function loadTweets() {
    $.ajax({
      method: "GET",
      url: "/tweets",
      dataType: 'json'
    }).done(function(data) {
        $('#all-tweets').empty();
        renderTweets(data);     
    });
  }

  loadTweets();

  // post request from user
  $("#tweets-maker").on('submit', function(event) {
    const counter = $('#counter');
    console.log("counter.text(): ", counter.text());
    if (((counter.text()) >= 0) && (counter.text() < 140)){
      alert("OK");

      // prevent the default behaviour
      event.preventDefault();
      
      // get the data from the form
      // ajax post request
      const serialized = $(this).serialize();
      let form = this;

      $.ajax({    
        method: "POST",
        url: "/tweets",
        data: serialized
      }).done(function() {    
        form.reset();   // cleans the form area
        $("#counter").text("140");    // sets the label for the original max

        // on success, refresh the creaks on the page    
        loadTweets(serialized);
      });
    } else {
      alert("Please the message is suppose to be bigger than 0 and up to 140 characters.");

      // prevent the default behaviour
      event.preventDefault();
    }
  });
});

// https://formden.com/blog/validate-contact-form-jquery