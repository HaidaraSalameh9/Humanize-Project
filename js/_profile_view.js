// =================== research ===================
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

// =================== Choosing language===================

document.querySelectorAll(".stars").forEach((starContainer) => {
  const stars = starContainer.querySelectorAll(".star");
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.remove("inactive");
        } else {
          s.classList.add("inactive");
        }
      });
    });
  });
});
