(() => {
  const btn = document.querySelector(".btn");
  const modal = document.querySelector(".modal");
  const close = document.querySelector(".modal__close");

  btn.addEventListener("click", () => {
    modal.classList.remove("modal--hidden");
    modal.classList.add("modal--visible");
  });

  close.addEventListener("click", () => {
    modal.classList.remove("modal--visible");
    modal.classList.add("modal--hidden");
  });
})();
