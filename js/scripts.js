function numberChecker (number) {
  alert("Not a number!");
};

function romanConverter(number) {

};

// User Interface below this line

$(function() {
  $("form#roman-numerals").submit(function(event){
    event.preventDefault();

    var userInput = $("input#number-input").val();
    numberChecker(userInput);
    var result = romanConverter(userInput);
    $(".result").text(result);
  });
});
