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