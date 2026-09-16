const btnOpenSidebar = document.getElementById("openSidebar");
const btnCloseSidebar = document.getElementById("closeSidebar");
const sidebarElement = document.getElementById("sidebar");
const overlayElement = document.getElementById("sidebarOverlay");

btnOpenSidebar.addEventListener("click", () => {
  sidebarElement.classList.add("active");
  sidebarElement.classList.remove("d-none");
  overlayElement.classList.remove("d-none");
  document.body.classList.add("sidebar-open");
  btnOpenSidebar.classList.add("d-none"); // hide open button
  btnCloseSidebar.classList.remove("d-none");
});

function closeSidebarFunc() {
  sidebarElement.classList.remove("active");
  overlayElement.classList.add("d-none");
  document.body.classList.remove("sidebar-open");
  btnOpenSidebar.classList.remove("d-none"); // show open button again
}

btnCloseSidebar.addEventListener("click", closeSidebarFunc);
overlayElement.addEventListener("click", closeSidebarFunc);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebarElement.classList.contains("active")) {
    closeSidebarFunc();
  }
});

function handleResizeAt1400() {
  if (window.innerWidth >= 1400) {
    sidebarElement.classList.remove("active");
    overlayElement.classList.add("d-none");
    btnOpenSidebar.classList.add("d-none");
    btnCloseSidebar.classList.add("d-none");
  } else {
    if (!sidebarElement.classList.contains("active")) {
      btnOpenSidebar.classList.remove("d-none");
    }
  }
}

window.addEventListener("resize", handleResizeAt1400);

handleResizeAt1400();
