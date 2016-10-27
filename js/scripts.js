var result;
// Checks if user input falls within the allowable range.
function numberChecker (number) {
  if (number > 0 && number < 3999) {
    romanConverter(number);
  } else {
    alert("Not a number!");
  }
};
// Converts user input to
function romanConverter(number) {
  result = number;
};

// User Interface below this line

$(function() {
  $("form#roman-numerals").submit(function(event){
    event.preventDefault();

    result = 0;
    var userInput = ($("input#number-input").val();
    numberChecker(userInput);
    $(".result").text(result);
  });
});
