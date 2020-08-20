var score = [90, 55, 80, 60, 100];
var customerName = [
    'Michael Kwon',
    'Steve Jobs',
    'John Denver',
    'Pocketmon'
];

document.write(customerName.sort() + ('<br>'));//이름순으로 정렬
document.write(score.sort(function(a,b){return a - b;} + ('<br>'))); // 번호순으로 정렬
document.write(score.sort(function(a,b){return b - a;} + ('<br>'))); // 배열을 높은 번호 순으로 정렬