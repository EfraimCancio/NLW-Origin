/* Open/close menu (toggle)*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
} 

/* Navigation menu (Links)*/
const links = document.querySelectorAll('li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* Change header-box-shadow after scrolling */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* Testimonials sliders (swiper)*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1, 
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

/* Scroll reveal*/
const scrollReveal = ScrollReveal({
    orientation: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
})
scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact . links,
    footer .brand, footer .social
    `,
    { interval: 100 }
)

/* back to the top */
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})