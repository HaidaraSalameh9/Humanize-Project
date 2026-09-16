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
const languageItems = document.querySelectorAll(".language-item");
const selectedFlag = document.getElementById("selectedFlag");
const selectedLang = document.getElementById("selectedLang");

languageItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const lang = item.getAttribute("data-lang");
    const flag = item.getAttribute("data-flag");
    const text = item.textContent.trim();

    //  update the knowledge according to the country (image path)
    if (flag === "kw") {
      selectedFlag.src = "./img/kuwait.svg";
    } else {
      selectedFlag.src = `https://flagcdn.com/h20/${flag}.png`;
    }

    selectedLang.textContent = text;

    // Data storage
    localStorage.setItem("selectedLang", lang);
    localStorage.setItem("selectedFlag", flag);
    localStorage.setItem("selectedText", text);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("selectedLang");
  const flag = localStorage.getItem("selectedFlag");
  const text = localStorage.getItem("selectedText");

  if (lang && flag && text) {
    if (flag === "kw") {
      selectedFlag.src = "./img/kuwait.svg";
    } else {
      selectedFlag.src = `https://flagcdn.com/h20/${flag}.png`;
    }
    selectedLang.textContent = text;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#selectDate", {
    defaultDate: new Date(2022, 1, 3),
    dateFormat: "M d, Y",
    allowInput: false,
  });

  flatpickr("#selectTime", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    defaultDate: "05:15",
    allowInput: false,
  });
});

function setupFormInput(sectionClass) {
  const tags = document.querySelectorAll(`.form-input.${sectionClass} .tag`);
  const checkbox = document.querySelector(`.form-input.${sectionClass} .form-check input`);
  let prevState = [];

  function updateCheckboxState() {
    const allChecked = Array.from(tags).every((tag) => tag.classList.contains("checked"));
    checkbox.checked = allChecked;
  }

  tags.forEach((tag) => {
    tag.setAttribute("tabindex", "0"); //

    tag.addEventListener("click", () => {
      tag.classList.toggle("checked");
      updateCheckboxState();
    });

    tag.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        tag.classList.toggle("checked");
        updateCheckboxState();
      }
    });
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      prevState = Array.from(tags).map((tag) => tag.classList.contains("checked"));
      tags.forEach((tag) => tag.classList.add("checked"));
    } else {
      tags.forEach((tag, i) => {
        if (prevState[i]) {
          tag.classList.add("checked");
        } else {
          tag.classList.remove("checked");
        }
      });
    }
  });
}

["one", "two"].forEach(setupFormInput);

const resetBtn = document.getElementById("reset-all");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    document.querySelectorAll(".tag").forEach((tag) => tag.classList.remove("checked"));
    document.querySelectorAll(".form-check input[type='checkbox']").forEach((cb) => (cb.checked = false));
  });
}
