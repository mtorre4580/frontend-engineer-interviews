const Users = [
  {
    id: "0F8JIqi4zwvb77FGz6Wt",
    lastName: "Fiedler",
    firstName: "Heinz-Georg",
    email: "heinz-georg.fiedler@example.com",
    title: "mr",
    picture: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    id: "0P6E1d4nr0L1ntW8cjGU",
    picture: "https://randomuser.me/api/portraits/women/74.jpg",
    lastName: "Hughes",
    email: "katie.hughes@example.com",
    title: "miss",
    firstName: "Katie",
  },
  {
    id: "1Lkk06cOUCkiAsUXFLMN",
    title: "mr",
    lastName: "Aasland",
    firstName: "Vetle",
    picture: "https://randomuser.me/api/portraits/men/97.jpg",
    email: "vetle.aasland@example.com",
  },
  {
    id: "1OuR3CWOEsfISTpFxsG7",
    picture: "https://randomuser.me/api/portraits/men/66.jpg",
    lastName: "Vasquez",
    email: "dylan.vasquez@example.com",
    title: "mr",
    firstName: "Dylan",
  },
  {
    id: "1pRsh5nXDIH3pjEOZ17A",
    lastName: "Vicente",
    title: "miss",
    firstName: "Margarita",
    email: "margarita.vicente@example.com",
    picture: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "3JAf8R85oIlxXd58Piqk",
    email: "joey.oliver@example.com",
    title: "mr",
    firstName: "Joey",
    lastName: "Oliver",
    picture: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    id: "5aZRSdkcBOM6j3lkWEoP",
    picture: "https://randomuser.me/api/portraits/women/50.jpg",
    email: "lilja.lampinen@example.com",
    lastName: "Lampinen",
    firstName: "Lilja",
    title: "ms",
  },
  {
    id: "5tVxgsqPCjv2Ul5Rc7gw",
    email: "abigail.liu@example.com",
    lastName: "Liu",
    title: "miss",
    picture: "https://randomuser.me/api/portraits/women/83.jpg",
    firstName: "Abigail",
  },
  {
    id: "6wy6UNkZueJfIUfq88d5",
    picture: "https://randomuser.me/api/portraits/women/32.jpg",
    firstName: "Melanie",
    email: "melanie.pilz@example.com",
    title: "miss",
    lastName: "Pilz",
  },
  {
    id: "7DbXNPWlNDR4QYVvFZjr",
    email: "evan.carlson@example.com",
    firstName: "Evan",
    picture: "https://randomuser.me/api/portraits/men/80.jpg",
    lastName: "Carlson",
    title: "mr",
  },
];

const createItem = (user) => {
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const p = document.createElement("p");

  h2.classList.add("item__title");
  h2.textContent = `${user.firstName} ${user.lastName}`;

  img.src = user.picture;
  img.alt = user.title;
  img.classList.add("item__img");

  p.textContent = user.email;
  p.classList.add("item__email");

  article.appendChild(img);
  article.appendChild(h2);
  article.appendChild(p);

  article.classList.add("item");

  return article;
};

(() => {
  const carousel = document.querySelector(".caurosel");
  const fragment = new DocumentFragment();
  Users.forEach((user) => {
    const item = createItem(user);
    fragment.appendChild(item);
  });
  carousel.appendChild(fragment);
})();
