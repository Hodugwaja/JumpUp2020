var f = 0;
var cusName = ["Michael", "Steve", "John", "Poketmon"];
var searchName = prompt('이름 조회', '조회할 이름을 입력하세요');
for(var i = 0; i<cusName.length; i++){
    if(searchName === cusName[i]){
        alert(searchName + "을 찾았습니다 :)");
        f = 1;
        break;
    }
}
if(f === 0){
    alert("해당하는 이름이 없습니다");
}