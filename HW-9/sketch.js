
/*variables*/
var weather
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=e0bcdc8cb9c45d251e57c9725cb248a1';
var units = '&units=metric';
var input;
var createCanvas;
var h1;


/*functions*/
function setup() {
canvas =  createCanvas(600, 400);
canvas.parent('sketch-holder');
h1 = createElement ('h1', 'Choose a city to see a thing!')
var button1 = select('#submit');
  button1.mousePressed(weatherAsk);
  input = select('#city');
}

function mousePressed() {
  h1.html("Clouds, Humidity, Temperature")
createP("Try Another City!")
}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(89, 113, 137);
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    var all = weather.clouds.all;
    var deg = weather.clouds.deg;

    ellipse(500, 200, temp, temp);
    ellipse(300, 200, humidity, humidity);
    ellipse(100, 200, all, all);
      text(input.value(), 10, 20);

  }
}
