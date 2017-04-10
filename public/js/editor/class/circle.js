class circle {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.width, this.height);
  }

  static setoptions() {
    return `<div class="col-11">
    <form class="form-inline">
      Width: <input type="text" class="form-control" id="opt-circleW" value="50">
      Height: <input type="text" class="form-control" id="opt-circleH" value="50">
    </form>
  </div>
  `;
  }
}
