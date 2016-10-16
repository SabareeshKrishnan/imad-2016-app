console.log('Loaded');
var submit = document.getElementById('submit_btn');

submit.onclick = function() {
    
    //create request
    var request = new XMLHttpRequest();

    //capture the request and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //check status of the request next....
            if (request.status === 200) {
                var comments = request.responseText;
                comments = JSON.parse(comments);
                var list = '';
                for (var i=0; i<comments.length; i++) {
                    list == comments[i] + '<br>';
                }
                var commentarea =  document.getElementById('footer');
                commentarea.innerHTML = list;
            }
        }
    };
       //make request
    var commentInput = document.getElementById('comment');
    comment = commentInput.value; 
    request.open('GET', 'http://sabareeshkrishnan.imad.hasura-app.io/submit-comment?comment=' + comment, true);
    request.send(null);
};