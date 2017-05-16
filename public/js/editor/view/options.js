$( document ).ready(function() {
  $("#setSquare").click(function(){
    optionShape = "square";
    $("#optionsmenu .row").html(square.setoptions());
    $('*').removeClass("active");
    $(this).addClass("active");
  });

  $("#setCircle").click(function(){
    optionShape = "circle";
    $("*").removeClass("active");
    $(this).addClass("active");
    $("#optionsmenu .row").html(circle.setoptions());
  });

  $("#setText").click(function(){
    optionShape = "text";
    $("*").removeClass("active");
    $(this).addClass("active");
    $("#optionsmenu .row").html(text.setoptions());
  });

  $("#setDragg").click(function(){
    optionShape = "dragg";
    $("*").removeClass("active");
    $(this).addClass("active");
    $("#optionsmenu .row").html("Arrastra un elemento");
  });
});
