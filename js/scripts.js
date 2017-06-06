$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("input#number2").val());
    var countBy =  parseInt($("input#number1").val());
    console.log(countTo);
    console.log(countBy);
    // var numbers= [];
      // console.log(total);
  if (countTo < countBy) {
    alert("WRoNG!");
  } else if (countTo < 0 || countBy < 0) {
      alert("IDiOT!");
  } else if (isNaN(countBy) || isNaN(countTo)) {
    alert("Bonehead!");
  } else {
      for (var index = countBy; index <= countTo; index += countBy) {
        alert(index);
      }
  }



  });
});
