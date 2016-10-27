var result;
var romans = ["I", "V", "X", "L", "C", "D", "M"];
var arabics = [1, 5, 10, 50, 100, 500, 1000];
// Strips user input of punctuation
function stripper(number) {
  number = number.replace(/\D*/g, "");
  return parseInt(number);
}
// Checks if user input falls within the allowable range.
function numberChecker(number) {
  if (number > 0 && number <= 3999) {
    romanConverter(number);
  } else {
    alert("Not a number or it's too high!");
  }
};
// Converts user input to
function romanConverter(number) {
  function whichArabic(arabicNumber) {
    return arabicNumber === number;
  }
  var index = arabics.findIndex(whichArabic);
  var roman = romans[index];
  result = roman;
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
