// char - string conjunto de caracteres

//'um texto aqui '

// numeros number

// bolean: true or false

// const e uma variavel que n]ao pode mudar

// DOM document object model

/* abre e fecha o menu quando clicar no icone*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um icone do menu esconder o menu*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/* Mudar o header da pagina quando der scrol          */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll e maior que a altura do header
    header.classList.add('scroll')
    console.log('maior igual')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoinst: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
      get setWrapperSize() {
        return this._setWrapperSize
      },
      set setWrapperSize(value) {
        this._setWrapperSize = value
      }
    }
  }
})

/*SCROLLREVEAL MOSTGRAR ELEMENTOS QUANDO DER SCROOL NAS PAGINAS*/

const scrollReveal = scrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials 
#contact .text, #contact .links ,footer .brand, footer .social

`,
  { interval: 100 }
)

/* BOTAO VOLTAR PARA O TOPO */
const backToTopButton = document.querySelector('.back-to-top')
function bacKToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a se????o visivel na pagina */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=]' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=]' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*MENU SCROLL */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  bacKToTop()
  activateMenuAtCurrentSection()
})
