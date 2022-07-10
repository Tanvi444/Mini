// const modalBtn = document.querySelector(".modal-btn");
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn");
// const banner = document.querySelector(".banner");
// const hero = document.querySelector(".hero");

// modalBtn.addEventListener("click", function () {
//   hero.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//   modal.classList.add("open-modal");
// });
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
