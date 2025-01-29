const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
function selectBox(selectedBox) {
  document.querySelectorAll('.project-box').forEach(box => {
    box.classList.remove('selected');  })
    selectedBox.classList.add('selected');
}