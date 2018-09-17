"use strict";

$(document).ready(function(){
  $(this).on("click", function(){
    var $counter1 = $("#count1");
    console.log($($counter1).text());
    $($counter1).text() == ($($counter1).text() + 1);
  })
})
