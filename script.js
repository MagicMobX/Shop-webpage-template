const menubar = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menubar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  });
