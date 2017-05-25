function load() {
  doc = Snap("#svg");
  doc.attr({
    height: doch / 2,
    width: docw / 2
  });

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


