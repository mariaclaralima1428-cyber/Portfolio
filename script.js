const sections = document.querySelectorAll("section, footer");
const links = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  links.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});

function reveal() {

  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }

  });

}

window.addEventListener("scroll", reveal);

reveal();




const slider = document.getElementById("slider");

let pos = 0;
const largura = 290;

/* CLONAR OS 3 PRIMEIROS */

const itens = slider.children;

for (let i = 0; i < 3; i++) {
  let clone = itens[i].cloneNode(true);
  slider.appendChild(clone);
}

function mover(direcao) {

  pos += direcao;

  slider.style.transition = "transform 0.6s ease";

  slider.style.transform = `translateX(${-pos * largura}px)`;

  /* quando chegar no final */

  if (pos >= itens.length - 3) {

    setTimeout(() => {

      slider.style.transition = "none";
      pos = 0;

      slider.style.transform = `translateX(0px)`;

    }, 600);

  }

  /* quando voltar */

  if (pos < 0) {

    slider.style.transition = "none";
    pos = itens.length - 4;

    slider.style.transform = `translateX(${-pos * largura}px)`;

  }

}

/* POPUP */

function abrir(src) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("imgPopup").src = src;
}

function fechar() {
  document.getElementById("popup").style.display = "none";
}