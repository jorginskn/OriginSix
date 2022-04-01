//Abre e fecha o menu quando clicar no ícone: hamburguer e x 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")


for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

//Quando clicar em um item no menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}
// Mudar oheader da pagina quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= navHeight) {
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        //scroll é menor que a altura
        header.classList.remove('scroll')
    }
})

