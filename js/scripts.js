var result;
var romans = ["M", "D", "C", "L", "X", "V", "I"];
var arabics = [1000, 500, 100, 50, 10, 5, 1];
var roman;
var newRoman;
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
  // Callback functions.
  function whichArabic(arabicNumber) {
    return arabicNumber <= number;
  }
  function romanStacker(stacks) {
    number = stacks;
    stacks = stacks.toString().charAt(0);
    stacks = parseInt(stacks);
    var stackIndex = arabics.findIndex(whichArabic);
    for(var idx = 0; idx < stacks && idx < 3; idx++) {
      console.log("for loop");
      newRoman += romans[stackIndex];
    }
  }
  // End callback functions.

  //Check index scope if neccessary
  var index = arabics.findIndex(whichArabic);
  newRoman = "";
  if (number % arabics.find(whichArabic) != 0) {
    romanStacker(number);
    var remainder = number % arabics.find(whichArabic);
    romanStacker(remainder);
  } else {
    romanStacker(number);
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
