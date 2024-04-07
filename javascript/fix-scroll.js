window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if(window.scrollY > 40) {
        header.classList.add("fixed");
        header.addEventListener("transitionend", ()=> header.classList.add("fixed-smooth"));
    } else {
        header.classList.remove("fixed");
        header.addEventListener("transitionend", ()=> header.classList.remove("fixed-smooth"));
    }
});