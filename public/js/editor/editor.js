var objects = [];
var optionShape = "";
var doc;

var socket = io.connect('http://localhost:8080', {reconnect: true});

socket.emit('hola','hola');

load();

doc.click(function (evt) {
  if (optionShape == "square") {
    var obj = new square(evt.offsetX, evt.offsetY, 80, 50, objects.length);
  }
  if (optionShape == "circle") {
    var obj = new circle(evt.offsetX, evt.offsetY, 50);
  }
  if (optionShape == "text") {
    var obj = new text(evt.offsetX, evt.offsetY, prompt("Texto: "), objects.length);
  }
  obj.show();
  objects.push(obj);
});

$('#save').click(function () {
  socket.emit('save',{idcampaign: , idesign: , obj:JSON.stringify(objects)});
});