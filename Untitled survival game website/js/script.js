// JavaScript source code
window.addEventListener('scroll', reveal);
function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 200;
        if (revealtop < windowHeight - revealpoint) {
            reveals[i].classList.add('active');

        }
        else {
            reveals[i].classList.remove('active');
        }

    }
}
reveal();
function buttonLink(link) {
    location.href = link;
  
}
