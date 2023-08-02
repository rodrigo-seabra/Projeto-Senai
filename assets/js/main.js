function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("close")) {
    menuMobile.classList.remove("close");
    document.querySelector(".icon").src = "assets/photos/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("close");
    document.querySelector(".icon").src = "assets/photos/close_white_36dp.svg";
  }
}

//funcionalidade do menu scroll

const menuLinks = document.querySelectorAll(".nav-item");

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector("#" + id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 120;
  nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((links) => {
  links.addEventListener("click", scrollToSection);
});

//functio pergunta

function sim() {
  alert("Você aceitou fazer o curso do SENAI! :)");
  location.href = "https://www.youtube.com/shorts/ue91vOv8wQs";
}

function desvia(btn) {
  // btn declarado na função
  btn.style.position = "absolute";
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
  console.log("opa, desviei...");
}

function geraPosicao(min, max) {
  return Math.random() * (max - min) + min + "%";
}

/* Apague se quiser, isso apenas escreve MTHS1901 e o link para o tutorial no console */
const o = "MTHS1901",
  e = 90,
  l = "bold";
console.log(
  `%c${o}`,
  "font-size: 90px; font-weight: bold; background: linear-gradient(90deg, red, yellow);"
),
  console.log("Tutorial: https://www.youtube.com/watch?v=zxxB9SFh9p4");
