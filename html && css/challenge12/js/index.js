(() => {
  const form = document.querySelector(".form");
  const inputs = document.querySelectorAll(".form__input");
  const invalid = document.querySelector(".form__invalid");

  const validations = {
    email: (value = "") => {
      const regular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regular.test(value);
    },
    password: (value = "") => value.length > 4,
  };

  for (const input of inputs) {
    input.addEventListener("change", (event) => {
      const currentInput = event.target.name;
      const currentValue = event.target.value;
      const isValid = validations[currentInput](currentValue);
      if (!isValid) {
        invalid.textContent = `The field ${currentInput} is invalid`;
      } else {
        invalid.textContent = "";
      }
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit form");
  });
})();
