const main = document.querySelector(".main");
const mito = document.querySelectorAll(".mito");
const panel = document.querySelector(".panel");

main.addEventListener("mouseenter", () => {
  main.classList.remove("main");
  main.classList.add("main-hover");
});

main.addEventListener("mouseleave", () => {
  main.classList.remove("main-hover");
  main.classList.add("main");
});

mito.forEach((element) => {
  element.addEventListener("click", () => {
    panel.classList.remove("panel");
    panel.classList.add("panel-click");
  });
});

panel.addEventListener("click", () => {
  panel.classList.remove("panel-click");
  panel.classList.add("panel");
});
