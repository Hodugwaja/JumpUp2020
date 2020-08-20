var btn = document.getElementById('btnHandler');

btn.onclick = function(){
    alert('event 1');
}
btn.onclick = function(){
    alert('event 2');
}