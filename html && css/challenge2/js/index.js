// Init
(() => {
  // Current timer number, interval
  let timer = null;

  /**
   * Create the clockdown with the interval function to check the diff
   */
  const createClockdown = (endTime) => {
    const clockdown = document.querySelector(".clockdown");

    timer = setInterval(() => {
      const diff = endTime - new Date().getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      clockdown.textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;

      if (diff < 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  /**
   * Register the listener to listen the date when is selected
   * to active the clockdown...
   */
  const addListeners = () => {
    const date = document.querySelector(".date");
    if (date) {
      date.addEventListener("change", (event) => {
        const selectedDate = event.target.value;
        if (timer) {
          clearInterval(timer);
        }
        if (selectedDate) {
          createClockdown(new Date(selectedDate));
        }
      });
    }
  };

  addListeners();
})();
