const menuBtn = document.getElementById('menubar');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
