var ySpeed = 1
var img
var rectSize = 32
var slider
function setup() {
  var canvas = createCanvas(601, 401)
  img = loadImage("sample.jpg")
  pixelDensity(1)
  slider = createSlider(2,32,8)
  // slider.position(0,410)
  canvas.parent("canvas-container")
  slider.parent("slider-container")
}

function draw() {
  rectSize = slider.value()
  image(img,0,0,600/rectSize,400/rectSize)
  loadPixels()
  background(0)


  for (var y = 0; y < height/rectSize; y++) {
    for (var x = 0; x < width/rectSize; x++) {

      var index = (x + y * width) * 4
      var r = pixels[index]
      var g = pixels[index + 1]
      var b = pixels[index + 2]
      fill(r,g,b)
      rect(x*rectSize,y*rectSize,rectSize,rectSize)
    }
  }
}
