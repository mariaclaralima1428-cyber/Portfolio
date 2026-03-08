const sections = document.querySelectorAll("section");
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