$(document).ready(function() {
  //Opening the menu
  $("#open-menu").click(function() {
    $("aside").animate({"left": 0}, 2000);
  });
  //Closing the menu
$("#close-menu").click(function() {
  $("aside").animate({"left":"-110%"}, 2000);
  });
});
