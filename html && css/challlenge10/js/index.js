(() => {
  // Buttons
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const btnUp = document.querySelector(".btn-up");
  const btnDown = document.querySelector(".btn-down");
  // Element
  const element = document.querySelector(".element");

  /*
      Apply direction to modify the position
       @param {string} position: left, right, top, bottom
       @param {number} size: current size to move
       @param {boolean} hasIncrease: is the operation is + or -
    */
  const applyDirection = (position, size, hasIncrease) => {
    const currentPosition = parseFloat(element.style[position] || 0);
    let value = null;
    if (hasIncrease) {
      value = `${currentPosition + size}px`;
    } else {
      value = `${currentPosition - size}px`;
    }
    element.style[position] = value;
  };

  btnUp.addEventListener("click", () => {
    applyDirection("top", 5, false);
  });

  btnDown.addEventListener("click", () => {
    applyDirection("top", 5, true);
  });

  btnLeft.addEventListener("click", () => {
    applyDirection("left", 5, false);
  });

  btnRight.addEventListener("click", () => {
    applyDirection("left", 5, true);
  });
})();
