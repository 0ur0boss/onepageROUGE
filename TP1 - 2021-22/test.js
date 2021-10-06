var img = new Image();
alert("oui");
img.onload = function() {
    dessiner(this);
};

function dessiner(img) {
    //   var canevas = document.getElementById('canevas');
    var img = document.getElementById('photo');
    var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');

  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  var inversion = function() {
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = 255 - data[i];     // rouge
      data[i + 1] = 255 - data[i + 1]; // vert
      data[i + 2] = 255 - data[i + 2]; // bleu
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var niveaudegris = function() {
    for (var i = 0; i < data.length; i += 4) {
      var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = moy; // rouge
      data[i + 1] = moy; // vert
      data[i + 2] = moy; // bleu
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var btninversion = document.getElementById('btninversion');
  btninversion.addEventListener('click', inversion);
  var btnniveaudegris = document.getElementById('btnniveaudegris');
  btnniveaudegris.addEventListener('click', niveaudegris);
}