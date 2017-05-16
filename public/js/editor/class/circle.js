class circle {
  constructor(x,y,r,id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.radius = r;
  }

  show() {
    var cr = doc.circle(this.x, this.y, this.radius);
    cr.drag(this.move, this.start, this.stop );
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
    return `<div class="col-11">
    <form class="form-inline">

      <label class="sr-only" for="opt-squareC">X</label>
      <input type="color" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-circleC" value="">

      <label class="sr-only" for="opt-squareX">X</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">X</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-circleX" value="">
      </div>

      <label class="sr-only" for="opt-squareY">Y</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">Y</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-circleY" value="">
      </div>

      <label class="sr-only" for="opt-squareR">Radius</label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon">R</div>
        <input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" id="opt-circleR" value="">
      </div>
      </div>
    </form>
  </div>
  `;
  }
}
