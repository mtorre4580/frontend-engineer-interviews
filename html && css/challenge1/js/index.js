/**
 * Register form to simulate the loader spinner
 */
const registerForm = () => {
  const form = document.querySelector(".searchbox");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const input = document.querySelector(".searchbox__input");
      const loader = document.querySelector(".loader");
      if (input && input.value) {
        loader.classList.replace("loader-inactive", "loader-active");
        setTimeout(() => {
          loader.classList.replace("loader-active", "loader-inactive");
        }, 2000);
      }
    });
  }
};

/**
 * Register tabs to selected and show the current section
 */
const registerTabs = () => {
    const tabs = document.querySelectorAll(".tab");
    const selectSection = idx => {
        const sections = document.querySelectorAll('.section');
        [...sections].forEach(section => {
            if (section.classList.contains(idx)) {
                section.classList.replace('section-inactive', 'section-active');
            } else {
                section.classList.replace('section-active', 'section-inactive');
            }
        });
    }

    if (tabs) {
        [...tabs].forEach(tab => {
            tab.addEventListener('click', () => {
                const tabs = document.querySelectorAll(".tab");
                [...tabs].forEach(t => {
                    if (t.id === tab.id) {
                        t.classList.replace('tab-inactive', 'tab-active');
                        selectSection(tab.id);
                    } else {
                        t.classList.replace('tab-active', 'tab-inactive');
                    }
                });
            });
        });
    }
};

// Init 
(() => {
  registerTabs();
  registerForm();
})();
