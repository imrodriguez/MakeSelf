class maketext {
  constructor(texto,x,y,size) {
    this.x = x;
    this.y = y;
    this.texto = texto;
    this.size = size;
  }

  show() {
    fill(0);
    textSize(this.size);
    text(this.texto, this.x, this.y);
  }

  static setoptions() {
    return `<div class="col-11">
    Tamaño: <select class="custom-select" id="txt-size">
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
  </div>
  `;
  }
}
