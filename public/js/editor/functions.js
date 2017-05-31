function load() {
  doc = Snap("#svg");
  doc.attr({
    height: 800 / 2,
    width: 600 / 2
  });

  /*for (var obj in objects) {
    obj.show();
  }*/

  let data = toimg();
  $('#download').attr({
    download: 'download.png',
    href: data,
  });
}

function toimg() {
  var svg = document.getElementById('svg'),
    xml = new XMLSerializer().serializeToString(svg),
    data = "data:image/svg+xml;base64," + btoa(xml);
  return data;
}