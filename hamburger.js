var widthScreen;
var actualWidth;

function action() {
    document.querySelector('nav').classList.toggle('active');

    //return widthScreen = window.innerWidth;
    //console.log(widthScreen);

}

function removeaction() {
    document.querySelector('nav').classList.remove('active');


}


//window.addEventListener('resize', callback);

/*function callback() {
    return actualWidth = window.innerWidth;
}*/


//console.log(action());
/*if (action() < 1024 && document.querySelector('nav.active') == "active") {
    document.querySelector('nav').classList.remove('active');

}*/



document.querySelector('.hamburger').addEventListener('click', action)
document.querySelectorAll('nav ul li a').forEach(function (clickedLink) {
    clickedLink.addEventListener('click', removeaction)
});