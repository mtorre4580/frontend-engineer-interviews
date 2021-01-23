(() => {
  const btnStart = document.querySelector(".btn--start");
  const btnReset = document.querySelector(".btn--reset");
  const progress = document.querySelector(".progress-bar");

  btnStart.addEventListener("click", () => {
    progress.style.transition = "2s linear width";
    progress.style.width = "100%";
  });

  btnReset.addEventListener("click", () => {
    progress.style.width = "0%";
  });
})();
