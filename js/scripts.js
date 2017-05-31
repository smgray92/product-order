$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstInput = $("input#firstname").val();
    var lastInput = $("input#lastname").val();
    var baddressInput = $("input#baddress").val();
    var saddressInput = $("input#saddress").val();
$(".firstname").text(firstInput);
$(".lastname").text(lastInput);
$(".baddress").text(baddressInput);
$(".saddress").text(saddressInput);
$("#orderreview").show();

event.preventDefault();

  });
});
