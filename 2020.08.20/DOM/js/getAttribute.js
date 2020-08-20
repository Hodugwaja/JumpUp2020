function changeColor(){
    var box = document.getElementById('box2');
    box.setAttribute('class', 'box2');

    var getAttr = box.getAttribute('class');
    alert(getAttr);
}