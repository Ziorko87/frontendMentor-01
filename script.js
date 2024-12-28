const userImage = document.querySelector("img");

const listItems = document.querySelectorAll("li");

listItems.forEach((li) => {
  li.addEventListener("mouseenter", () => {
    userImage.classList.add("lime-shadow");
  });
  li.addEventListener("mouseleave", () => {
    userImage.classList.remove("lime-shadow");
  });
});
