function closeDrawer() {
  document.getElementById("my-drawer-2").checked = false;
}

let nav = document.querySelector(".navbar");

let lastScrollY = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 45) {
    if (window.scrollY > lastScrollY) {
      nav.classList.remove("top-[0]");
      nav.classList.add("top-[-10rem]");
    } else {
      nav.classList.add("top-[0]");
    }
    lastScrollY = window.scrollY;
  }
});
