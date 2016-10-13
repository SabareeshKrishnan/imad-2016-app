console.log('Loaded');

var submit = document.getElementById('submit_btn');

submit.onclick = (function() {
    var commentInput = document.getElementById('comment')
    commentInput.value = 'Value'
});