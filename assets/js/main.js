/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_eqw0e4e', 'template_hqaaa1b', '#contact-form', 'igvs2Bdo_5jUl7a1q')
        .then(() =>{
            contactMessage.textContent = 'Message sent successfully ✅'

            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()

        }, () =>{
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                   : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('activer-link')
        }
    })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal( {
    origin: 'top',
    distance: '60px',
    duration: 2500 ,
    delay: 400
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container, .footer__social`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card, .certificates__card`, {interval: 100})

// Add Blob Animation Code

const blobElements = document.querySelectorAll('.home__blob, .about__blob');

blobElements.forEach(blob => {
   blob.addEventListener('mouseover', () => {
      blob.classList.add('animate-blob');
      blob.classList.add('hovered'); // Add this line for transition effect
   });

   blob.addEventListener('mouseout', () => {
      blob.classList.remove('animate-blob');
      blob.classList.remove('hovered'); // Add this line for transition effect
   });
});
