//var objects = [];
var optionShape = "";
var doc;
var socket = io.connect('http://localhost:8080', {reconnect: true});

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
  socket.emit('save',{idcampaign: idcmp, idesign: idesign, obj:objects});
  let data = toimg();
  $('#download').attr({
    download: 'download.png',
    href: data,
  });
});
