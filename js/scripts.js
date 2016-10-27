$(function() {
  $("form#roman-numerals").submit(function(event){
    event.preventDefault();

    var userInput = $("input#number-input").val();
    var result = romanConverter(userInput);
    $(".result").text(result);
  });
});
