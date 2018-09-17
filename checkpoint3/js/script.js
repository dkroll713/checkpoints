"use strict";

$(document).ready(function(){

var $counter1 = $("#count1").text();
var $counter2 = $("#count2").text();
var $counter3 = $("#count3").text();
var $counter4 = $("#count4").text();
var $counter5 = $("#count5").text();
  $("#btn1").click(function(){
    $("#count1").text() == ($("#count1").text() + 1);
    console.log($counter1);
  });

  $("#btn2").click(function(){
    document.getElementById("count2").innerHTML == $counter2++;
    console.log($counter2);
  });

});
