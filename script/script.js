const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
var typed = new Typed(".text", {
    strings: ["Student", "Web Developer", "Freelancer"],
    typedSpeed: 150,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});