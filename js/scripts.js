var result;
// Strips user input of punctuation
function stripper(number) {
  number = number.replace(/\D*/g, "");
  parseInt(number);
  return number;
}
// Checks if user input falls within the allowable range.
function numberChecker(number) {
  console.log("number: " + number);
  if (number > 0 && number <= 3999) {
    romanConverter(number);
  } else {
    alert("Not a number or it's too high!");
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
    var userInput = $("input#number-input").val();
    numberChecker(stripper(userInput));
    $(".result").text(result);
  });
});
