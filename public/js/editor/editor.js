var objects = [];
var optionShape = "" ;

var doc = Snap("#svg");
doc.attr({
  height: doch/2,
  width: docw/2
});

doc.click(function(evt){
  if (optionShape == "square") {
    let sq = new square(evt.offsetX,evt.offsetY,80,50,objects.length);
    sq.show();
    objects.push(sq);
  }
  if (optionShape == "circle") {
    let cr = new circle(evt.offsetX,evt.offsetY,50);
    cr.show();
    objects.push(cr);
  }
  if (optionShape == "text") {
    let tx = new text(evt.offsetX,evt.offsetY,prompt("Texto: "),objects.length);
    tx.show();
    objects.push(tx);
  }
});

$('#save').click(function(){
  
  console.log(JSON.stringify(objects));
  /*var svg  = document.getElementById('svg'),
  xml  = new XMLSerializer().serializeToString(svg),
  data = "data:image/svg+xml;base64," + btoa(xml),
  img  = new Image()

  img.setAttribute('src', data)
  document.body.appendChild(img)*/
});

function toimg(){

}
