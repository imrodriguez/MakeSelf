class square {
  constructor(x,y,w,h,id) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.id = id;
    this.fill;
    this.object;
  }

  show() {
    $("#" + this.id).remove();
    this.object = doc.rect(this.x,this.y,this.w,this.h);
    this.object.attr({
      id: this.id,
      fill: this.fill
    });
    this.object.click(function() {
      square.load(parseInt(this.attr("x"))+parseInt(this.attr('transform').totalMatrix.e),parseInt(this.attr("y"))+ parseInt(this.attr('transform').totalMatrix.f),this.attr("width"),this.attr("height"),this.attr('fill'),this.attr('id'));
    });
    this.object.drag(this.move, this.start, this.stop );
  }

  move(dx,dy,x,y,evt) {
    this.attr({
      transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
    });
  }

  start() {
    this.data('origTransform', this.transform().local );
  }

  stop() {

  }

  static load(x,y,w,h,c,id) {
    function rgb2hex(rgb){
     rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
     return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }
    c = rgb2hex(c);

    $("#optionsmenu .row").html(`<div class="col-11">
    <form class="form-inline">

      <label class="sr-only" for="opt-squareC">X</label>
      <input type="color" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareC" value="${c}">

      <label class="sr-only" for="opt-squareX">X</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">X</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareX" value="${x}">
      </div>

      <label class="sr-only" for="opt-squareY">Y</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">Y</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareY" value="${y}">
      </div>

      <label class="sr-only" for="opt-squareW">Width</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">W</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareW" value="${w}">
      </div>

      <label class="sr-only" for="opt-squareH">Height</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">H</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareH" value="${h}">
      </div>
    </form>
  </div>
  `);
  $( "#opt-squareW" ).change(function() {
    objects[id].w = parseInt($(this).val());
    objects[id].show();
  });
  $( "#opt-squareX" ).change(function() {
    $("#" + id).attr('transform',"");
    $("#" + id).attr('x',$(this).val());
    $("#" + id).attr('y',$('#opt-squareY').val());
  });
  $( "#opt-squareY" ).change(function() {
    $("#" + id).attr('transform',"");
    $("#" + id).attr('y',$(this).val());
    $("#" + id).attr('x',$('#opt-squareX').val());
  });
  $( "#opt-squareH" ).change(function() {
    objects[id].h = parseInt($(this).val());
    objects[id].show();
  });
  $( "#opt-squareC" ).change(function() {
    objects[id].fill = $(this).val();
    objects[id].show();
  });
  }

  static setoptions() {
    return `<div class="col-11">
    <form class="form-inline">

      <label class="sr-only" for="opt-squareC">X</label>
      <input type="color" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareC">

      <label class="sr-only" for="opt-squareX">X</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">X</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareX" value="">
      </div>

      <label class="sr-only" for="opt-squareY">Y</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">Y</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareY" value="">
      </div>

      <label class="sr-only" for="opt-squareW">Width</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">W</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareW" value="">
      </div>

      <label class="sr-only" for="opt-squareH">Height</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">H</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-squareH" value="">
      </div>
    </form>
  </div>
  `;
  }
}
