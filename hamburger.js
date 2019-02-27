function action() {
    document.querySelector('nav').classList.toggle('active');

}

function removeAction() {
    document.querySelector('nav').classList.remove('active');

}

document.querySelector('.hamburger').addEventListener('click', action)
document.querySelectorAll('nav ul li a').forEach(function (clickedLink) {
    clickedLink.addEventListener('click', removeAction)
});