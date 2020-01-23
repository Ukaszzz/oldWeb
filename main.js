let clicked = true;
let size = 100;
btn1 = document.querySelector(".smallMenu");
nav = document.querySelector(".menu__navigation");
const btn2 = document.querySelector(".menu__portfoli");
const btn3 = document.querySelector(".menu__me");
const btn4 = document.querySelector(".menu__offer");
const btn5 = document.querySelector(".menu__contact ");
const btn6 = document.querySelector(".head__portfolio");
const btn7 = document.querySelector(".head__kontakt");
const btnBack = document.querySelector(".backButton");

const distaneceFrom1 = document.querySelector(".aboutMe").offsetTop;
const distaneceFrom2 = document.querySelector(".skills").offsetTop;
const distaneceFrom3 = document.querySelector(".projects").offsetTop;
const distaneceFrom4 = document.querySelector(".contacts").offsetTop;

btn2.addEventListener("click", () =>
  window.scrollTo({
    top: distaneceFrom3,
    behavior: "smooth"
  })
);

btn3.addEventListener("click", () =>
  window.scrollTo({
    top: distaneceFrom1,
    behavior: "smooth"
  })
);
btn6.addEventListener("click", () =>
  window.scrollTo({
    top: distaneceFrom1,
    behavior: "smooth"
  })
);

btn4.addEventListener("click", () =>
  window.scrollTo({
    top: distaneceFrom2,
    behavior: "smooth"
  })
);
btn5.addEventListener("click", () =>
  window.scrollTo({
    top: distaneceFrom4,
    behavior: "smooth"
  })
);
btn7.addEventListener("click", () =>
  window.scrollTo({
    top: distaneceFrom4,
    behavior: "smooth"
  })
);
btnBack.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
);

window.addEventListener("scroll", function() {
  console.log("scroll");
  if (window.scrollY <= size) {
    nav.style.backgroundColor = "rgba(0,0,0,0.3)";
  } else if (window.scrollY >= size) {
    nav.style.backgroundColor = "rgba(0,0,0,0.8)";
  }
});

btn1.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  let men1 = document.querySelector(".smallMenu__first");
  let men2 = document.querySelector(".smallMenu__second");
  if (clicked == true) {
    menu.style.display = "block";
    men1.style.display = "none";
    men2.style.display = "block";

    clicked = !clicked;
  } else if (clicked == false) {
    menu.style.display = "none";
    men1.style.display = "block";
    men2.style.display = "none";
    clicked = !clicked;
  }
});
