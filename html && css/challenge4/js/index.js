(() => {
  const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Lemon"];
  const inputSearch = document.querySelector(".autocomplete__input") || null;
  const list = document.querySelector(".list") || null;

  const appendItemsToList = (list, items) => {
    const fragmentItems = new DocumentFragment();

    items.forEach((result) => {
      const item = document.createElement("li");
      item.classList.add("list__item");
      item.textContent = result;
      item.addEventListener("click", () => alert(`selected: ${result}`));
      fragmentItems.appendChild(item);
    });

    list.appendChild(fragmentItems);
  };

  if (inputSearch) {
    inputSearch.addEventListener("keyup", (event) => {
      const { value } = event.target;
      if (value.trim() !== "") {
        const results = fruits.filter((fruit) =>
          fruit.toLowerCase().includes(value.toLowerCase())
        );
        list.innerHTML = "";
        if (results.length) {
          appendItemsToList(list, results);
        } else {
          list.innerHTML = "No Results";
        }
      } else {
        list.innerHTML = "";
      }
    });
  }
})();
