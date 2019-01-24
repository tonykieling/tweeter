// $(function () {

  const maxCharacteres = 140;

  let textareaElement = $("#txtarea");
  $(textareaElement).on("input", function() {
    
    let length = $(this).val().length;
    length = maxCharacteres - length;
    $("#counter").html(length);
    
    if (length < 0){
      $("#counter").css({color: "red"});
    } else {
      $("#counter").css({color: "black"});
    }
  });
// }

  // $("#tweet-container").hover(function(){
  //   $(this).css("border", ("solid 2px grey"));
  //   $(this).css("fontWeight", "bold");
  //   $(this).css("opacity", 1);
  //   $("#icons").css("opacity", 1);
  // }, function(){
  //     $(this).css("border silver 1px", );
  //     $(this).css("fontWeight", "normal");
  //     $(this).css("opacity", 0.8);
  //     $("#icons").css("opacity", 0)
  //     });
  // });