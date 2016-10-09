console.log('Loaded!');

//counter code
var button = document.getElementById('counter');

button.onclick = function() {
  //create a request object
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function() {
      if (request.readyState == XMLHttpRequest.DONE) {
          if(request.status == 200 ) {
              //take action: print counter value 
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
  }
  //make request
  request.open('GET', 'http://sabareeshkrishnan.imad.hasura-app.io/counter', true);
  request.send(null);
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