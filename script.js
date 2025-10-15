const menubar = document.getElementById("menubar");
const sidebar = document.getElementById("sidebar");

menubar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  });
