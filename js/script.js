/*var droni = new Array()
var countdown = 10
var canvasW = 0
var canvasH = 0;

function loadGame() {
   //prompt('shit hapens')
   var canvas = document.getElementById('canvas');
   canvas.style.height='500px';
   canvasH = 500
   canvasW = parseInt(canvas.style.width)
   canvas.style.paddingRight='0px'
   canvas.style.paddingLeft='0px'
   setTimeout(anima(),30)
}

function nuovoDrone() {
      var drone = document.createElement('div')
      //drone.src='icons/flatty-social-media/png/chat23.png'
      drone.className = 'icon facebook-icon';
      drone.style.width = '20px';
      drone.style.height = '20px';
      drone.style.position = 'relative';
      drone.style.left = 0 + 'px'
      drone.style.top = Math.floor(Math.random()*475) +'px'
      var canvas = document.getElementById('canvas');
      canvas.appendChild(drone);
      drone.parentNode = canvas;
      droni.push(drone)
}

function spostaDrone(droneID) {
   var drone = droni[droneID]
   var pos = parseInt(drone.style.left) + 1
   if (pos > 1000) {
      var canvas = document.getElementById('canvas');
      drone.parentNode.removeChild(drone);
      droni.splice(droneID,1)
   }
   drone.style.left = pos
}

function anima() {
   if(countdown != 0) {
      nuovoDrone()
      countdown--;
   }
   for (var i = 0; i < droni.length; i++) {
    var uscito = spostaDrone(i);
  }
   if(droni.length > 0) {
      setTimeout(anima(),1000)
   }
}
*/
var scatoline = new Array();
var Icone = new Array('facebook','twitter','gplus','skype','youtube','instagram')
var countdown = 6
var canvasW = 0
var canvasH = 500
var offset
var margin = 20
var id = 0
var deg = 0

function creaScatolina() {
    var tela = document.getElementById('canvas');
  var telaQ = $('.canvas')
  var s = document.createElement('div');
  s.className = 'icon ' + Icone[id] + '-icon';
  s.style.top = 0 + 'px';
  id++
  s.style.left = 0
  s.Vx = (Math.random() * id) + 1;
  s.Vy = 5;
  //s.Ax = Math.random()/2 + 1;
  //s.Ay = Math.random()/2 + 1
  //s.animate(s.style.left,400)
  telaQ.append(s);
  scatoline.push(s);
}

function spostaScatolina(s) {
  var xNew = parseInt(s.style.left) + s.Vx;
  var yNew = parseInt(s.style.top) + s.Vy;
  if (xNew < 0 || xNew > canvasW - 50) s.Vx *= -1;
  if (yNew > canvasH - 50) s.Vy *= -1;
  //console.log("a " + x + " b " + y + " w " + canvasW)
  s.style.left = (xNew + s.Vx) + 'px';
  s.style.top = (yNew + s.Vy) + 'px';
  //s.Vx += s.Ax;
  deg++
  s.style.webkitTransform = 'rotate('+deg+'deg)'; 
    s.style.mozTransform    = 'rotate('+deg+'deg)'; 
    s.style.msTransform     = 'rotate('+deg+'deg)'; 
    s.style.oTransform      = 'rotate('+deg+'deg)'; 
    s.style.transform       = 'rotate('+deg+'deg)';
  s.Vy += 1;
}
function restart() {
  var canvas = document.getElementById('canvas');
  for (var i = 0; i < scatoline.length; i++) {
    canvas.removeChild(scatoline[i])
  } 
  scatoline = new Array()
  countdown = 10
}

function anima() {
   if(countdown > 0) {
      creaScatolina()
      countdown--;
   }
  for (var i = 0; i < scatoline.length; i++) {
    spostaScatolina(scatoline[i]);
  }
  setTimeout('anima()', 30);
}

function loadGame() {
   var canvas = document.getElementById('canvas');
  var sprite = document.createElement('div')
  sprite.className = 'square-small'
  sprite.style.backgroundColor = 'red'
   canvas.style.height='500px'
   setTimeout('anima()', 30);
   var canvas = $('.canvas')
   canvasW = canvas.width()
   canvasH = canvas.height()
   
   sprite.style.left = canvasW/2 + 'px'
   sprite.style.top= (canvasH-20) + 'px'
   
   canvas.append(sprite)
   
}