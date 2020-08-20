var box = document.getElementById('box');

box.addEventListener('mouseover', function(){
    box.setAttribute('class', 'hover');
});

box.addEventListener('mouseout', function(){
    box.removeAttribute('class');
})