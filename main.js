// ScrollReveal declaration for the CDN-loaded library
const ScrollReveal = window.ScrollReveal

const toggleBtn=document.querySelector(".navBar-Toggle");
const navMenu=document.querySelector(".nav__links");

toggleBtn.addEventListener("click" , ()=>{
    toggleBtn.classList.toggle("close");
    navMenu.classList.toggle("open");

});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
})

ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal(".header__content .header__btn", {
    ...scrollRevealOption,
    delay: 2000,
})

ScrollReveal().reveal(".header__content .socials", {
    ...scrollRevealOption,
    delay: 2500,
})

ScrollReveal().reveal(".header__bar", {
    ...scrollRevealOption,
    delay: 3000,
})

/*ScrollReveal().reveal("#services .section", {
    ...scrollRevealOption,
    origin: "left",
    delay: 300,
})*/

ScrollReveal().reveal("#services .feature-list li", {
    ...scrollRevealOption,
    delay: 500,
    interval: 200,
})

ScrollReveal().reveal("#contact .section", {
    ...scrollRevealOption,
    origin: "right",
    delay: 300,
})

ScrollReveal().reveal("#contact .contact-details p", {
    ...scrollRevealOption,
    delay: 500,
    interval: 150,
})

ScrollReveal().reveal("#contact .social-link", {
    ...scrollRevealOption,
    delay: 800,
    interval: 200,
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})
