var divWidth;
var bottomDistance = document.querySelector("header");

function callback() {
    divWidth = document.querySelector(".social-media").clientWidth;
    bottomDistance.style.marginBottom = divWidth + "px";
}
if (window.innerWidth >= 1024)
    callback();
window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
        callback();
    } else
        bottomDistance.style.marginBottom = 0 + "px";
});