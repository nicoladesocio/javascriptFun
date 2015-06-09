var Icone = new Array();
var NomiIcone = new Array('facebook','twitter','gplus','skype','youtube','instagram')
var countdown = 6
var canvasW = 0
var canvasH = 500
var deg = 0
var gravityX = 0
var gravityY = 0
var timer

function creaIcona() {
    var tela = document.getElementById('canvas');
  var telaQ = $('.canvas')
  var s = document.createElement('div');
  s.className = 'icon ' + NomiIcone[countdown -1] + '-icon';
  s.style.top = 50 + 'px';
  s.style.left = 0
  s.Vx = 4;
  s.Vy = 0;
  telaQ.append(s);
  Icone.push(s);
}

function spostaIcona(s) {
  var xNew = parseInt(s.style.left) + s.Vx;
  var yNew = parseInt(s.style.top) + s.Vy;
  if (xNew < 0){
    s.Vx *= -1;
    xNew = 0;
  } else if (xNew > canvasW - 40) {
    s.Vx *= -1
    xNew = canvasW - 40;
  }
  if (yNew < 0){
    s.Vy *= -1;
    yNew = 0;
  } else if (yNew > canvasH - 40) {
    s.Vy *= -1;
    yNew = canvasH - 40;
  }
  //console.log("a " + x + " b " + y + " w " + canvasW)
  s.style.left = xNew + 'px';
  s.style.top = yNew + 'px';
  //s.Vx += s.Ax;
  deg++
  s.style.webkitTransform = 'rotate('+deg+'deg)'; 
    s.style.mozTransform    = 'rotate('+deg+'deg)'; 
    s.style.msTransform     = 'rotate('+deg+'deg)'; 
    s.style.oTransform      = 'rotate('+deg+'deg)'; 
    s.style.transform       = 'rotate('+deg+'deg)';
    s.Vy += gravityY
    s.Vx += gravityX
}

function restart() {
  var canvas = document.getElementById('canvas');
  for (var i = 0; i < Icone.length; i++) {
    canvas.removeChild(Icone[i])
  } 
  Icone = new Array()
  countdown = 6
  gravityX = 0
  gravityY = 1
  clearTimeout(timer)
  loadGame()
}

function anima() {
   if(countdown > 0) {
      creaIcona()
      countdown--;
   }
  for (var i = 0; i < Icone.length; i++) {
    spostaIcona(Icone[i]);
  }
  timer = setTimeout('anima()', 30);
}

function loadGame() {
   var canvas = document.getElementById('canvas');
  var sprite = document.createElement('div')
  sprite.className = 'square-small'
  sprite.style.backgroundColor = 'red'
   canvas.style.height= '500px';
   gravityX = 0
   gravityY = 1
   timer = setTimeout('anima()', 30);
   var canvas = $('.canvas')
   canvasW = canvas.width()
   canvasH = canvas.height()
   
   document.body.focus()
}
 
document.onkeydown = function(e) {
  e = (e ? e : window.event);
  var key = (e.keyCode ? e.keyCode : (e.which ? e.which : false))
  console.log(key)
  flow = true
  if (key == '37') {
    //LEFT
    gravityX = -1;
    gravityY = 0;
  }
  else if (key == '38') {
    //UP
    gravityX = 0;
    gravityY = -1
  }
  else if(key == '39') {
    //RIGHT
    gravityX = 1;
    gravityY = 0;
  }
  else if (key == '40') {
    //DOWN
    gravityX = 0
    gravityY = 1
  }
  resetGravity(gravityX,gravityY)
}
function resetGravity(valueX,valueY) {
  for (var i = 0; i < Icone.length; i++) {
    if(valueX != 0) {
      Icone[i].Vx = 0;
    }
    else {
      Icone[i].Vy = 0;
    }
  }
}

document.onkeyup = function(e) {
  speedIncr = 1
}