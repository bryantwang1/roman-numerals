var result;
var romans = ["M", "D", "C", "L", "X", "V", "I"];
var arabics = [1000, 500, 100, 50, 10, 5, 1];
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
// Converts user input to roman numerals.
function romanConverter(number) {
  // A callback function for findIndex to find which objects inside the array equal number.
  function whichArabic(arabicNumber) {
    return arabicNumber <= number;
  }
  // End callback function.
  var index = arabics.findIndex(whichArabic);
  var roman = romans[index];
  var newRoman = "";
  for(i=0; i<number; i++) {
    console.log("for loop");
    newRoman += roman;
  }
  result = newRoman;
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
