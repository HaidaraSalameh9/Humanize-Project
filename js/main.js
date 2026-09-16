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

// ===================Page initialization===================

document.getElementById("year").textContent = new Date().getFullYear();

// =================== Talents Section===================
let talents_list = document.querySelector(".talents-list .row");
let talents_item_all = document.querySelectorAll(".talents-section .talents-list .col-4");
let talents_array = Array.from(talents_item_all);
let isTalentsExpanded = false;

function renderTalents() {
  talents_list.innerHTML = "";
  const itemsToShow = isTalentsExpanded ? talents_array : talents_array.slice(0, 9);
  itemsToShow.forEach((item) => talents_list.appendChild(item));
}

renderTalents();

let rightSidebar = document.getElementById("right-sidebar");
let RightOpenSidebar = document.getElementById("RightOpenSidebar");
let RightSidebarOverlay = document.getElementById("RightSidebarOverlay");
let closeSidebarRight = document.getElementById("close-sidebar-right");

RightOpenSidebar.addEventListener("click", () => {
  rightSidebar.classList.add("active");
  rightSidebar.classList.remove("d-none");
  RightSidebarOverlay.classList.remove("d-none");
  RightOpenSidebar.classList.add("d-none");
  closeSidebarRight.classList.remove("d-none");
});

function closeSidebar() {
  rightSidebar.classList.remove("active");
  RightSidebarOverlay.classList.add("d-none");
  RightOpenSidebar.classList.remove("d-none");
  closeSidebarRight.classList.add("d-none");
}

closeSidebarRight.addEventListener("click", closeSidebar);
RightSidebarOverlay.addEventListener("click", closeSidebar);

function handleResize() {
  if (window.innerWidth >= 1200) {
    rightSidebar.classList.remove("active");

    RightSidebarOverlay.classList.add("d-none");
    RightOpenSidebar.classList.add("d-none");
    closeSidebarRight.classList.add("d-none");
  } else {
    if (!rightSidebar.classList.contains("active")) {
      RightOpenSidebar.classList.remove("d-none");
    }
  }
}

window.addEventListener("resize", handleResize);

handleResize();

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && rightSidebar.classList.contains("active")) {
    closeSidebar();
  }
});

// =================== Swiper===================

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector(".swiper-button-prev").addEventListener("click", () => {
  swiper.slidePrev();
});

document.querySelector(".swiper-button-next").addEventListener("click", () => {
  swiper.slideNext();
});

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

// =================== Jobs&Contests===================
const jobsContests = document.querySelector(".jobs-contests-button");
const jobsButton = document.querySelector(".jobs-button h3");
const contestsButton = document.querySelector(".contests-button h3");
const jobsSection = document.querySelector(".jobs");
const contestsSection = document.querySelector(".contests");

const viewAll = document.querySelector(".view-all");
let isJobsExpanded = false;
let isContestsExpanded = false;
let activeTab = "jobs"; // or "contests" based on your default

function switchToJobs() {
  activeTab = "jobs";
  jobsContests.classList.remove("contests-active");
  jobsButton.classList.remove("text-black-50");
  contestsButton.classList.add("text-black-50");

  jobsSection.classList.add("active");
  contestsSection.classList.remove("active");

  renderCards();
}

function switchToContests() {
  activeTab = "contests";
  jobsContests.classList.add("contests-active");
  jobsButton.classList.add("text-black-50");
  contestsButton.classList.remove("text-black-50");

  jobsSection.classList.remove("active");
  contestsSection.classList.add("active");

  renderCards();
}

function renderCards() {
  const jobCards = document.querySelectorAll(".jobs .card");
  const contestCards = document.querySelectorAll(".contests .card");

  const currentLanguage = document.documentElement.lang || "en";

  if (activeTab === "jobs") {
    jobCards.forEach((card, index) => {
      card.style.display = isJobsExpanded || index < 3 ? "block" : "none";
    });

    viewAll.innerHTML = currentLanguage === "ar" ? (isJobsExpanded ? "عرض أقل" : "عرض الكل") : isJobsExpanded ? "View Less" : "View all";
  } else {
    contestCards.forEach((card, index) => {
      card.style.display = isContestsExpanded || index < 3 ? "block" : "none";
    });

    viewAll.innerHTML = currentLanguage === "ar" ? (isContestsExpanded ? "عرض أقل" : "عرض الكل") : isContestsExpanded ? "View Less" : "View all";
  }
}

jobsButton.addEventListener("click", switchToJobs);
contestsButton.addEventListener("click", switchToContests);

viewAll.addEventListener("click", () => {
  if (activeTab === "jobs") {
    isJobsExpanded = !isJobsExpanded;
  } else {
    isContestsExpanded = !isContestsExpanded;
  }
  renderCards();
});

switchToJobs();

const container = document.querySelector(".upcoming-completed-button");
const upcomingButton = document.querySelector(".upcoming-button");
const completedButton = document.querySelector(".completed-button");

upcomingButton.addEventListener("click", () => {
  container.classList.remove("completed-active");
  upcomingButton.classList.add("active-tab");
  completedButton.classList.remove("active-tab");
  completedButton.classList.add("text-black-50");
  upcomingButton.classList.remove("text-black-50");
});

completedButton.addEventListener("click", () => {
  container.classList.add("completed-active");
  completedButton.classList.add("active-tab");
  upcomingButton.classList.remove("active-tab");
  upcomingButton.classList.add("text-black-50");
  completedButton.classList.remove("text-black-50");
});

document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});
