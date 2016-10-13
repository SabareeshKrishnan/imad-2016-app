console.log('Loaded');

var submit = document.getElementById('submit_btn');

submit.onclick = (function() {
    
    //create request
    var commentInput = document.getElementById('comment');
    comment = commentInput.value;
    
    
    
    //make request
    request.open('GET', 'http://sabareeshkrishnan.imad.hasura-app.io/submit-comment?comment=', comment, true);
});