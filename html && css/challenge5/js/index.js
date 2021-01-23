// Init
(() => {
  const stars = document.querySelectorAll(".star");
  const result = document.querySelector(".result");

  let selected = false;

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    star.setAttribute("data-rating", i);

    star.addEventListener("mouseover", () => {
      if (!selected) {
        star.classList.replace('star--inactive', 'star--active');
        const rating = star.getAttribute("data-rating");
        for (let i = 0; i < rating; i++) {
            stars[i].classList.replace('star--inactive', 'star--active');
        }
      }
    });

    star.addEventListener("mouseout", () => {
      if (!selected) {
        for (let i = 0; i < stars.length; i++) {
          stars[i].classList.replace('star--active', 'star--inactive');
        }
      }
    });

    star.addEventListener("click", () => {
      const rating = star.getAttribute("data-rating");
      result.textContent = `Your score: ${parseInt(rating, 10) + 1}`;
      selected = !selected;
    });
  }
})();
