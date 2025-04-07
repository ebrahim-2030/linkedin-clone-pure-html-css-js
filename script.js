let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}
let showMoreLink = document.getElementById("showMoreLink");
let sidebarActivity = document.getElementById("sidebarActivity");

function toggleAtivity() {
  sidebarActivity.classList.toggle("open-activity");

  if (sidebarActivity.classList.contains("open-activity")) {
    showMoreLink.innerHTML = `Show less <b>-</b>`;
  } else {
    showMoreLink.innerHTML = `Show more <b>+</b>`;
  }
}
