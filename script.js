const sections = document.querySelectorAll("section, footer");
const links = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  links.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }

  });

});

function reveal(){

  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }

  });

}

window.addEventListener("scroll", reveal);

reveal();






const slider = document.querySelector(".certificados-container");
let cards = document.querySelectorAll(".certificado");

const visible = 3;
const cardWidth = 320; // 280 + 40 gap

// clonar primeiros e últimos cards
for(let i = 0; i < visible; i++){
  const firstClone = cards[i].cloneNode(true);
  const lastClone = cards[cards.length - 1 - i].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slider.firstChild);
}

cards = document.querySelectorAll(".certificado");

let index = visible;

slider.style.transform = `translateX(-${index * cardWidth}px)`;

// mover
function mover(direcao){
  index += direcao;

  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

// quando termina animação
slider.addEventListener("transitionend", () => {

  if(index >= cards.length - visible){
    slider.style.transition = "none";
    index = visible;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  if(index < visible){
    slider.style.transition = "none";
    index = cards.length - visible*2;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
  }

});

// autoplay
setInterval(()=>{
  mover(1);
},4000);

