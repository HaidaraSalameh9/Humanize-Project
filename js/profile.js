document.addEventListener("DOMContentLoaded", () => {
  const steps = Array.from(document.querySelectorAll(".profile-edit .tap"));
  const checkboxes = [document.getElementById("check-registration"), document.getElementById("check-hiring"), document.getElementById("check-profile"), document.getElementById("check-id"), document.getElementById("check-mobile"), document.getElementById("check-admin")];
  const iconButtons = document.querySelectorAll(".input-groups .icon-btn");
  const progressBar = document.querySelector(".UserProfileManager .progress-bar");
  const progressPercent = document.querySelector(".UserProfileManager .progres");

  let currentStep = 0;

  function setIcon(imgElement, isChecked) {
    imgElement.src = isChecked ? "./img/Iconly-Light-Edit.svg" : "./img/Time Circle.svg";
  }

  function updateProgress() {
    const checkedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
    const percent = Math.round((checkedCount / checkboxes.length) * 100);
    progressBar.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
  }

  function updateUI() {
    steps.forEach((step, index) => {
      if (index === currentStep) {
        step.classList.remove("d-none", "disabled-icon");
        step.scrollIntoView({ behavior: "smooth", block: "end" }); // Scroll to current tap
      } else {
        step.classList.add("disabled-icon");
      }
    });

    steps.forEach((step, index) => {
      const btnPrev = step.querySelector("#prev-btn");
      const btnNext = step.querySelector("#next-btn");
      const isRtl = document.dir === "rtl";

      if (btnPrev) btnPrev.disabled = currentStep === 0;
      if (btnNext) {
        btnNext.textContent = currentStep === steps.length - 1 ? (isRtl ? "تأكيد" : "Confirm") : isRtl ? "التالي" : "Next";
      }
    });

    checkboxes.forEach((checkbox, index) => {
      const isCurrent = index === currentStep;
      const iconBtn = iconButtons[index];
      const img = iconBtn.querySelector("img");

      checkbox.disabled = !isCurrent;
      iconBtn.disabled = !isCurrent;
      iconBtn.classList.toggle("disabled-icon", !isCurrent);

      if (isCurrent) {
        checkbox.checked = true;
      }

      setIcon(img, checkbox.checked);
    });

    updateProgress();
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
  });

  steps.forEach((step, index) => {
    const btnPrev = step.querySelector("#prev-btn");
    const btnNext = step.querySelector("#next-btn");

    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        if (currentStep > 0) {
          steps[currentStep].classList.add("d-none");
          currentStep--;
          updateUI();
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          updateUI();
        } else {
          const direction = document.documentElement.dir; // 'ltr' or 'rtl'

          if (direction === "rtl") {
            window.location.href = "./arabic-home.html";
          } else {
            window.location.href = "./home.html";
          }
        }
      });
    }
  });

  // التهيئة
  updateUI();
});

function setupFormInput(sectionClass) {
  const tags = document.querySelectorAll(`.form-input.${sectionClass} .tag`);
  const checkbox = document.querySelector(`.form-input.${sectionClass} .form-check input`);
  let prevState = [];

  //
  function updateCheckboxState() {
    const allChecked = Array.from(tags).every((tag) => tag.classList.contains("checked"));
    checkbox.checked = allChecked;
  }

  //
  tags.forEach((tag) => {
    tag.setAttribute("tabindex", "0");

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

const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

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
