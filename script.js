document.querySelectorAll('.hamburger').forEach((button) => {
  button.addEventListener('click', () => {
    const nav = document.getElementById(button.getAttribute('aria-controls'));
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open');
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
