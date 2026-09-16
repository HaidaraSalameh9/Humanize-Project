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

const fileInpute = document.getElementById("fileInpute");
const filenamesTextee = document.getElementById("filenames");
const viewBtne = document.getElementById("viewBtne");
const deleteBtne = document.getElementById("deleteBtne");
const modale = document.getElementById("filemodale");
const modaleImage = document.getElementById("modaleImage");
const previewImagee = document.getElementById("filePreviewe");

const defaultIcon = "./img/Document-1.svg";
let fileURL = null;

fileInpute.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    filenamesTextee.textContent = file.name;
    fileURL = URL.createObjectURL(file);
    previewImagee.src = fileURL;
    viewBtne.disabled = false;
    deleteBtne.disabled = false;
  }
});

function viewFile() {
  if (fileURL) {
    modale.style.display = "block";
    modaleImage.src = fileURL;
  }
}

function closemodale() {
  modale.style.display = "none";
}

function deleteFile() {
  fileInpute.value = "";
  fileURL = null;
  filenamesTextee.textContent = "No file chosen";
  viewBtne.disabled = true;
  deleteBtne.disabled = true;
  previewImagee.src = defaultIcon;
}

window.onclick = function (event) {
  if (event.target === modale) {
    closemodale();
  }
};

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

let rafId;

$("#range_01").ionRangeSlider({
  min: 0,
  max: 500,
  from: 150,
  step: 0.3,
  prettify: function (num) {
    if (num === 0) return num + " Kd";
    return num + " KD";
  },
  hide_min_max: false,
  onChange: function (data) {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const sliderWrapper = document.querySelector(".irs.irs--flat");
      if (data.from === 500) {
        sliderWrapper.classList.add("max-reached");
      } else {
        sliderWrapper.classList.remove("max-reached");
      }
    });
  },
});

const select = document.getElementById("age");

for (let i = 1; i <= 100; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  select.appendChild(option);
}

const names = ["Olivia", "Liam", "Emma", "Noah", "Ava", "Elijah", "Sophia", "James", "Isabella", "William", "Mia", "Benjamin", "Charlotte", "Lucas", "Amelia"];
const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Harris"];

let specificHuman = document.querySelector(".specific-human");

// إنشاء العناصر
names.forEach((name, index) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div class="col-11 col-md-5 col-xl-3 select-img mb-3" tabindex="0">
      <div class="form-check">
        <label for="${name}-${index}"
          class="form-check-label d-flex justify-content-between align-items-center gap-3">
          <img src="./img/${index + 1}.jpg" alt="sample">
          <h6 class="mb-0">${name} ${lastNames[index]}</h6>
          <input id="${name}-${index}" class="form-check-input" type="checkbox">
        </label>
      </div>
    </div>
  `;
  specificHuman.appendChild(wrapper.firstElementChild);
});

let selectImgs = document.querySelectorAll(".select-img");

// دالة لحساب العناصر في كل صف تلقائيًا
function getItemsPerRow() {
  let firstTop = selectImgs[0].getBoundingClientRect().top;
  let count = 0;
  for (let el of selectImgs) {
    if (el.getBoundingClientRect().top !== firstTop) break;
    count++;
  }
  return count;
}

// إضافة الأحداث
selectImgs.forEach((el, index) => {
  el.addEventListener("keydown", (e) => {
    const itemsPerRow = getItemsPerRow();
    let newIndex = index;

    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % selectImgs.length;
      selectImgs[newIndex].focus();
      e.preventDefault();
    }

    if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + selectImgs.length) % selectImgs.length;
      selectImgs[newIndex].focus();
      e.preventDefault();
    }

    if (e.key === "ArrowDown") {
      newIndex = (index + itemsPerRow) % selectImgs.length;
      selectImgs[newIndex].focus();
      e.preventDefault(); // ✅ يمنع التمرير المزعج
    }

    if (e.key === "ArrowUp") {
      newIndex = (index - itemsPerRow + selectImgs.length) % selectImgs.length;
      selectImgs[newIndex].focus();
      e.preventDefault(); // ✅ يمنع التمرير المزعج
    }

    if (e.key === "Enter" || e.key === " ") {
      const input = el.querySelector("input");
      if (input) input.checked = !input.checked;
      e.preventDefault(); // يمنع تمرير الصفحة عند الضغط على مسافة
    }
  });
});
