var btn = document.getElementById('btnListener');

btn.addEventListener('click', function(){
    alert('event 1');
});
btn.addEventListener('click', function(){
    alert('event 2');
});