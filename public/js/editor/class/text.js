class text {
  constructor(x,y,text,id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.text = text;
    this.size = "";
    this.object;
  }

  show() {
    this.object = doc.text(this.x,this.y,this.text);
    this.object.attr({
      id: this.id
    });
    this.object.drag(this.move, this.start, this.stop );
    this.object.click(function() {
      text.load(parseInt(this.attr("text-size")),this.attr('fill'),this.attr('id'));
    });
  }

  move(dx,dy) {
    this.attr({
      transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
    });
  }

  start() {
    this.data('origTransform', this.transform().local );
  }

  stop() {

  }

  static setoptions() {
    return `<form class="form-inline">
    							<div class="input-group">
    								<select class="custom-select" id="txt-size">
    						              <option value="1">1</option>
    						              <option value="2">2</option>
    						              <option value="4">4</option>
    						              <option value="12">12</option>
    						              <option value="16">16</option>
    						              <option value="21">21</option>
    						              <option value="24">24</option>
    						              <option value="32">32</option>
    						              <option value="48">48</option>
    						    </select>
    								<select class="custom-select" id="txt-font">
    						              <option value="Roboto">Roboto</option>
    						              <option value="Bebas">Bebas</option>
    						    </select>
    								<label class="sr-only" for="txt-color">Color</label>
    								<input type="color" class="form-control mb-2 mr-sm-2 mb-sm-0" id="txt-color" value="">
    							</div>
    						</form>
  `;
  }

  static load(s,c,id) {;
    function rgb2hex(rgb){
     rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
     return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }
    c = rgb2hex(c);

    $("#optionsmenu .row").html(`<form class="form-inline">
    							<div class="input-group">
    								<select class="custom-select" id="txt-size">
    						              <option value="1">1</option>
    						              <option value="2">2</option>
    						              <option value="4">4</option>
    						              <option value="12">12</option>
    						              <option value="16">16</option>
    						              <option value="21">21</option>
    						              <option value="24">24</option>
    						              <option value="32">32</option>
    						              <option value="48">48</option>
    						    </select>
    								<select class="custom-select" id="txt-font">
    						              <option value="Roboto">Roboto</option>
    						              <option value="Bebas">Bebas</option>
    						    </select>
    								<label class="sr-only" for="txt-color">Color</label>
    								<input type="color" class="form-control mb-2 mr-sm-2 mb-sm-0" id="txt-color" value="${c}">
    							</div>
    						</form>
  `);

  $("option[value="+s+"]").attr('selected','selected');
  $( "#txt-size" ).change(function() {
    $("#" + id).attr('font-size',$(this).val());
  });

  $( "#txt-color" ).change(function() {
    $("#" + id).attr('fill',$(this).val());
  });
  }
}
