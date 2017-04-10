class square {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x = x;
    this.y = y;
  }

  static setoptions() {
    return `<div class="col-11">
    <form class="form-inline">
      Width: <input type="text" class="form-control" id="opt-squareW" value="50">
      Height: <input type="text" class="form-control" id="opt-squareH" value="50">
    </form>
  </div>
  `;
  }
}
