$( document ).ready(function() {
  $("#setSquare").click(function(){
    optionShape = "square";
    $("#optionsmenu .row").html(square.setoptions());

    $( "#opt-squareW" ).change(function() {
      console.log($(this).val());
    });
    $( "#opt-squareH" ).change(function() {
      console.log($(this).val());
    });
  });

  $("#setCircle").click(function(){
    optionShape = "circle";
    $("#optionsmenu .row").html(circle.setoptions());
  });

  $("#setText").click(function(){
    optionShape = "text";
    $("#optionsmenu .row").html(text.setoptions());
  });
});
