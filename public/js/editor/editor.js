var option;
var tiposeleccion;
var seleccion;

var objetos = [];

var config = {
  square : {
    optsquareW : 50,
    optsquareH : 50
  },
  circle : {
    optcircleH : 50,
    optcircleW : 50
  },
  text : {
    textsize : 14
  }
};


$(document).ready(function() {
    $('#setDragg').click(function() {
        option = "dragg";
        $("#optionsmenu .row").html(function() {
            return `<div class="col-11">
            <p>Select the element you want to move</p>
          </div>
          `;
        });
        $('*').removeClass('active');
        $('#setDragg').addClass('active');
    });
    $('#setSquare').click(function() {
        option = "square";
        $("#optionsmenu .row").html(square.setoptions());
        $("#opt-squareW").keyup(function() {
            config.square.optsquareW = $(this).val();
        })
        .keyup();

        $("#opt-squareH").keyup(function() {
            config.square.optsquareH = $(this).val();
        })
        .keyup();
        $('*').removeClass('active');
        $('#setSquare').addClass('active');
    });
    $('#setCircle').click(function() {
        option = "circle";
        $("#optionsmenu .row").html(circle.setoptions());

        $("#opt-circleW").keyup(function() {
            config.circle.optcircleW = $(this).val();
        })
        .keyup();

        $("#opt-circleH").keyup(function() {
            config.circle.optcircleH = $(this).val();
        })
        .keyup();

        $('*').removeClass('active');
        $('#setCircle').addClass('active');
    });
    $('#setText').click(function() {
        option = "text";
        $("#optionsmenu .row").html(maketext.setoptions());
        $('#txt-size').click(function(){
          config.text.textsize = $('#txt-size').val();
        });
        $('*').removeClass('active');
        $('#setText').addClass('active');
    });
});



function setup() {
    createCanvas(doch, docw);
    $("#defaultCanvas0").appendTo("#canvas");
}

function draw() {
    background('#EEE');
    for (var i = 0; i < objetos.length; i++) {
        objetos[i].objeto.show();
    }
}

function mouseClicked() {
    if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
        if (option == "square") {
            var cuadrao = new square(mouseX, mouseY, config.square.optsquareW, config.square.optsquareH);
            var obj = {
              tipo : "square",
              objeto : cuadrao
            };
            objetos.push(obj);
        }
        if (option == "circle") {
            var circulo = new circle(mouseX, mouseY, config.circle.optcircleW, config.circle.optcircleH);
            var obj = {
              tipo : "circle",
              objeto : circulo
            };
            objetos.push(obj);
        }
        if (option == "text") {
            var textcontent = prompt('Introduce el texto:');
            var texto = new maketext(textcontent, mouseX, mouseY,config.text.textsize);
            var obj = {
              tipo : "text",
              objeto : texto
            };
            objetos.push(obj);
        }
        if (option == "dragg") {
            for (var i = 0; i < objetos.length; i++) {
              objetos[i]
              if (mouseX > objetos[i].objeto.x && mouseX < objetos[i].objeto.width + objetos[i].objeto.x && mouseY < objetos[i].objeto.height + objetos[i].objeto.y && mouseY >objetos[i].objeto.y) {
                  tiposeleccion = objetos[i].tipo;
                  seleccion = i;
              }
            }
        }
    }
}

function mouseDragged() {
    objetos[seleccion].objeto.update(mouseX, mouseY);
}
