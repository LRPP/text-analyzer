"use strict";

function setup(rawString) {
  return rawString.replace(/[.,'"\n\r()?$#@!;:]/gi, '').split(" ");
}

 function unique(str) {
  // Unique word count of the submitted text
  var distinctWords = [];
  for (var i=0; i<str.length; i++) {
    if (distinctWords.indexOf(str[i]) === -1) {
      distinctWords.push(str[i]);
    }
  }
  return distinctWords.length;
}

function average(str) {
    var words = setup(str);
    // Average word length in characters of the submitted text
    var wordAvg = 0;
    for (var i = 0; i < words.length; i++){
        wordAvg += words[i].length;
    }
    return wordAvg/words.length;
}

function display(txt) {
    $('.text-report').removeClass('hidden');
    var words = setup(txt)
    var numWords = words.length;
    var numUniqueWords = unique(words);
    var numAvgWords = average(txt);
    $('.js-count').text(numWords);
    $('.js-unique').text(numUniqueWords);
    $('.js-average').text(numAvgWords);
}

function submit(){
    $("#analyze").submit(function(event){
        event.preventDefault();
        var userText = $("#user-text").val();
        display(userText);
    });
}


$(function() {
  submit();
});