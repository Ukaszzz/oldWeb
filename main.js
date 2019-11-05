let clicked = true;
btn8 = document.querySelector(".smallMenu");

btn8.addEventListener("click", () => {
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
  console.log(clicked);
});
