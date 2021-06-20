
let boxes = document.querySelector('.buttonHover');
let button = document.querySelector('.button');
let point = document.querySelector('.point');
let pointer = document.querySelector('.pointer');
let number = 0;


if (document.location.reload){
    boxes.style.position = 'relative';
}
else if(button.clicked == true){
    daachire();
}
else {
    myFunction();
}

function points() {
    number ++;
    point.innerHTML = number;
}
function daachire() {
    button.innerHTML = 'Congrats!';
    boxes.style.position = 'unset';
    button.classList.add("pointer");
    points();
}

function myFunction(){
    boxes.style.position = 'absolute';
    button.innerHTML = 'catch me!';
    button.classList.remove("pointer");
    boxes.style.top = Math.floor((Math.random() * 60) + 10) + "%";
    boxes.style.bottom = Math.floor((Math.random() * 60) + 0) + "%";
    boxes.style.left = Math.floor((Math.random() * 80) + 0) + "%";
}