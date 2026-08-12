document.addEventListener('DOMContentLoaded', () => {
  // 1. Gerenciamento do estado ativo nos links do menu
  const navLinks = document.querySelectorAll('.nav-list a');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      navLinks.forEach(l => {
        l.classList.remove('active');
        l.removeAttribute('aria-current');
      });

      event.currentTarget.classList.add('active');
      event.currentTarget.setAttribute('aria-current', 'page');
    });
  });

  // 2. Garantir foco suave e acessível ao acionar o Skip Link
  const skipLink = document.querySelector('.skip-link');
  const mainContent = document.querySelector('#main-content');

  if (skipLink && mainContent) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    });
  }
});