console.log('Loaded!');

//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
  //make counter endpoint req
  
  //capture the response and store it in a variable
  
  //render variable in the correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};

var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//move the image
var img = document.getElementById("madi");

var marginleft = 0;
function moveRight () {
    marginleft = marginleft + 5;
    img.style.marginLeft = marginleft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50); 
};