// Barra de navegação fixa

const nav = document.querySelector(".nav-bar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav-hidden");
    } else {
        nav.classList.remove("nav-hidden");
    }

    lastScrollY = window.scrollY;

    if (window.scrollY <= 0) {
        nav.classList.remove("nav-hidden");
    }
});

// barra de navegação responsiva

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// carrossel

const carouselBtn = document.querySelectorAll('.btn');
const imageList = document.querySelectorAll('.slide');

carouselBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        desactiveSelectedBtn();

        selectCarouselBtn(btn);

        hideActiveBackgroundImage();

        showBackgroundImage(index);
    })
})

function desactiveSelectedBtn() {
    const selectedBtn = document.querySelector('.selecionado');
    selectedBtn.classList.remove('selecionado');
}

function selectCarouselBtn(btn) {
    btn.classList.add('selecionado');
}

function hideActiveBackgroundImage() {
    const activeImage = document.querySelector('.ativo');
    activeImage.classList.remove('ativo');
}

function showBackgroundImage(index) {
    imageList[index].classList.add('ativo');
}

// Auto-play



// duplicar brands-slide
var copy = document.querySelector(".brands-slide").cloneNode(true);
document.querySelector('.brands').appendChild(copy);