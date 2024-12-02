const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('.navlist');
const navLinks = document.querySelectorAll('.navlist a');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    navLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});


let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = function () {
  themeBtn.classList.toggle("ri-sun-line");
  if (themeBtn.classList.contains("ri-sun-line")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

function manualTyped(element, strings, typeSpeed, backSpeed, loop) {
  let textIndex = 0;
  let charIndex = 0;
  let typing = true;

  function type() {
    const currentString = strings[textIndex];
    if (typing) {
      if (charIndex < currentString.length) {
        element.textContent += currentString[charIndex];
        charIndex++;
        setTimeout(type, typeSpeed);
      } else {
        typing = false;
        setTimeout(type, 1000);
      }
    } else {
      if (charIndex > 0) {
        element.textContent = currentString.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(type, backSpeed);
      } else {
        typing = true;
        textIndex = (textIndex + 1) % strings.length; // Loop strings
        setTimeout(type, 500);
      }
    }
  }
  type();
}

manualTyped(document.querySelector(".multiple-text"), ["Major In", "Software Development", "Web Programming"], 100, 100, true);


const script = document.createElement("script");
script.src = "https://unpkg.com/scrollreveal";
script.onload = function () {

  const sr = ScrollReveal({
    distance: "200px",
    duration: 2500,
    delay: 200,
    reset: true,
  });

  sr.reveal(".home-container h3", { origin: "top" });
  sr.reveal(".home-container h1", { origin: "left" });
  sr.reveal(".home-container p", { origin: "left" });
  sr.reveal(".home-container .right", { origin: "right" });
  sr.reveal(".social-icons-container", { origin: "right" });
  sr.reveal(".about-container .title", { origin: "right" });
  sr.reveal(".about-container h3", { origin: "bottom" });
  sr.reveal(".about-container p", { origin: "bottom" });
  sr.reveal(".about-container .left", { origin: "left" });
  sr.reveal(".about-container .right", { origin: "right" });
  sr.reveal(".skills .title", { origin: "top" });
  sr.reveal(".skills .content-1", { origin: "left" });
  sr.reveal(".skills .content-2", { origin: "right" });
  sr.reveal(".project-container", { origin: "bottom" });
  sr.reveal(".project .title", { origin: "top" });
  sr.reveal(".project-buttons", { origin: "left" });
  sr.reveal(".contact .title", { origin: "top" });
  sr.reveal(".contact .row .box", { origin: "right" });
  sr.reveal(".contact .row .contact-form", { origin: "left" });
};

document.body.appendChild(script);
