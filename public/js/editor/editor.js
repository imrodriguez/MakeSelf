var doc = Snap("#svg");
doc.attr({
  height: doch/2,
  width: docw/2
});
var objects = [];
var optionShape = "" ;

var tmpsq = new square(0,50,800,75,84);
var tmptx = new text(125,95,"Facebook Post",95);

var template = [{
  id : tmpsq.id,
  type: "square",
  object: tmpsq
},{
  id: tmptx.id,
  type: "text",
  object: tmptx
}];

loadtemplate(template);
template[1].object.object.attr({
  fill: "#FFF",
  'font-size': "24"
});

doc.click(function(evt){
  if (optionShape == "square") {
    let sq = new square(evt.offsetX,evt.offsetY,80,50,objects.length);
    sq.show();
    let object = {
      id : objects.length,
      type: "square",
      object: sq
    };
    objects.push(object);
  }
  if (optionShape == "circle") {
    let cr = new circle(evt.offsetX,evt.offsetY,50);
    cr.show();
    let object = {
      id: objects.length,
      type: "circle",
      object: cr
    };
    objects.push(object);
  }
  if (optionShape == "text") {
    let tx = new text(evt.offsetX,evt.offsetY,prompt("Texto: "),objects.length);
    tx.show();
    let object = {
      id: objects.length,
      type: "text",
      object: tx
    };
    objects.push(object);
  }
});
