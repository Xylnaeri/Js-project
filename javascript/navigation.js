window.addEventListener('scroll', stickyFunction)
var stickynav = document.getElementById("stickynav");
var sticky = stickynav.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        stickynav.classList.add("sticky")
    }
    else { 
        stickynav.classList.remove("sticky")
    }
}