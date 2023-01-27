const shareBtn = document.querySelector(".share-btn");
const bubble = document.querySelector(".bubble");

const clicked = function () {
  bubble.classList.toggle("visible");
};

shareBtn.addEventListener("click", clicked);
