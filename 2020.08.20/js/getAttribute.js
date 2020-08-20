function changeColor(){
    var box = document.getElementById('box');
    box.setAttribute('class, box2');

    var getAttr = box.getAttribute('class');
    alert(getAttr);
}