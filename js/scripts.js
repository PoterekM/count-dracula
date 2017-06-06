$(document).ready(function() {
  $("#form1").submit(function(event) {
    var countTo = parseInt($("input#number2").val());
    var countBy =  parseInt($("input#number1").val());
    var total = 0
      for (var number = 0; number <= countTo; number += countBy) {
        total += number;

    }
    alert(("<li>") + total + ("</li>"));
  event.preventDefault();
  });
});
