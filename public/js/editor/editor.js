var doc = Snap("#svg");
var objects = [];
var optionShape = "" ;

var tmpsq = new square(100,150,200,50,84);
var template = [{
  id : 84,
  type: "square",
  object: tmpsq
}];

loadtemplate(template);

doc.click(function(evt){
  if (optionShape == "square") {
    var sq = new square(100,50,80,50,objects.length);
    sq.show();
    var object = {
      id : objects.length,
      type: "square",
      object: sq
    };
    objects.push(object);
    optionShape = "";
  }
  if (optionShape == "circle") {
    var cr = new circle(100,50,50);
    optionShape = "";
  }
  if (optionShape == "text") {
    var tx = new text(100,50,prompt("Texto: "),objects.length);
    tx.show();
    optionShape = "";
  }
});
