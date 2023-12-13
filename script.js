/* SCROLL SECTION */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/*Sticky navbar*/
let header = document.querySelectorAll('header');

header.classList.toggle('sticky', window.scrollY > 100);
};

/*scroll reveal*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.btn-portfolio, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.about-img', { origin: 'left'});
ScrollReveal().reveal('.home-img, .about-content', { origin: 'right'});


/* NAVBAR */

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".navbar").forEach(n => n. 
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbar.classList.remove("active")
    }))
