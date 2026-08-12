document.addEventListener('DOMContentLoaded', () => {
  // Garantir comportamento de foco correto ao usar o "Skip Link"
  const skipLink = document.querySelector('.skip-link');
  const mainContent = document.querySelector('#conteudo-principal');

  if (skipLink && mainContent) {
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    });
  }
});