$(function () {

  const maxCharacteres = 140;

  let textAreaElement = $("#txtarea");
  $(textAreaElement).on("input", function() {
    let length = $(this).val().length;
    length = maxCharacteres - length;
    $("#counter").html(length);

    // it hides the error empty text area, due to, now, there is text
    $(".new-tweet #zero").hide();
    
    if (length < 0){
      $("#counter").css({color: "red"});
    } else {
      $("#counter").css({color: "black"});
      $(".new-tweet #toobig").hide();
    }
  });
});