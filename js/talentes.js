// =================== البحث ===================
const input = document.querySelector(".search-input input");
const icon = document.querySelector(".search-input .icon");

input.addEventListener("focus", function () {
  icon.style.color = "var(--denim-blue)";
  input.style.color = "var(--denim-blue)";
});

input.addEventListener("blur", function () {
  if (this.value.trim() === "") {
    icon.style.color = "var(--sky-blue)";
    input.style.color = "var(--sky-blue)";
  }
});

input.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    input.style.color = "var(--denim-blue)";
  } else {
    input.style.color = "var(--sky-blue)";
  }
});

// =================== اختيار اللغة ===================

document.getElementById("year").textContent = new Date().getFullYear();

let boxes = document.querySelector(".boxes");
let talents_boxes = document.querySelectorAll(".boxes .talents-box");

let imageModal = document.getElementById("imageModal");
let modalImg = document.getElementById("modalImage");
let closeModal = document.getElementById("closeModal");

talents_boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let img = box.querySelector("img");
    console.log(img);

    imageModal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  imageModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    imageModal.style.display = "none";
  }
});
