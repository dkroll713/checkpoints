"use strict";

$(document).ready(function(){
  var count1 = document.getElementById('count1').text;
  console.log(count1);
  $('#pu1').on('click', function(){
    count1++;
  })
})
