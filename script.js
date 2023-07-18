let song
let sliderV
let sliderR
let sliderP
var button 
var amp

function setup() {
  createCanvas(500, 500);
  song = loadSound("song.mp3",loaded)
  text("Volume")
  slider = createSlider(0,1,0.5,0.01)
  sliderR = createSlider(0,3,1,0.01)
  sliderP = createSlider(-1,1,0,0.01)
  amp = new p5.Amplitude()
  
}

function togglePlaying(){
  if(!song.isPlaying()){
    song.play()
    button.html("Pause")
  }
  else{
    song.pause()
    button.html("Play")
  }
  
}

function loaded(){
   button = createButton("Play")
  button.mousePressed(togglePlaying)
}
function draw(){
  background(23)
  var vol = amp.getLevel()
  fill(255,0,255)
  var d = map(vol,0,1,50,200)
  ellipse(width/2,height/2,d,d)
  song.setVolume(slider.value())
  song.pan(sliderP.value())
  song.rate(sliderR.value())
}
