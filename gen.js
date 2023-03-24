var downloadable = "";
var body_loadHander = function() {

  var crtOpt = function(value, label) {
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(label) );
    opt.value = value;
    return opt;
  };

  var t = document.forms['qrForm'].elements['t'];
  t.appendChild(crtOpt('' + 0, 'Auto Detect') );
  for (var i = 1; i <= 40; i += 1) {
    t.appendChild(crtOpt('' + i, '' + i) );
  }
  t.value = '0';

  update_qrcode();
};

var draw_qrcode = function(text, typeNumber, errorCorrectionLevel) {
  document.write(create_qrcode(text, typeNumber, errorCorrectionLevel) );
};

var create_qrcode = function(text, typeNumber,
    errorCorrectionLevel, mode, mb) {

  qrcode.stringToBytes = qrcode.stringToBytesFuncs[mb];

  var qr = qrcode(typeNumber || 4, errorCorrectionLevel || 'M');
  qr.addData(text, mode);
  qr.make();

//  return qr.createTableTag();
//  return qr.createSvgTag();
  return qr.createSvgTag();
};

var update_qrcode = function() {
// //   var form = document.forms['qrForm'];
//   var text = document.getElementById("text-input").value.
//     replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
// //   var t = form.elements['t'].value;
// //   var e = form.elements['e'].value;
// //   var m = form.elements['m'].value;
// //   var mb = form.elements['mb'].value;
//   document.getElementById('qr').innerHTML =
//     create_qrcode(text, '', 'H(30%)', 'Alphanumeric', 'default');


    var typeNumber = 10;
var errorCorrectionLevel = 'M';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData(document.getElementById("text-input").value);
qr.make();
document.getElementById('qr').innerHTML = qr.createImgTag();
downloadable=qr.createDataURL()
var x = document.getElementById("downloader");
x.style.display = "block";
};
function downloadSVG() {
  // var svg = document.getElementById("qr").innerHTML; // Get the SVG data from the "qr" div
  // svg = svg.replace(/xmlns="[^"]+"/g, ''); // Remove the namespace declaration
  // var blob = new Blob([svg], { type: "image/gif+xml" }); // Create a Blob from the SVG data
  // var url = URL.createObjectURL(blob); // Create a download URL for the Blob

  // Create a link to the download URL and click it to trigger the download
  var link = document.createElement("a");
  link.setAttribute("href", downloadable);
  link.setAttribute("download", "qrcode.gif");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}