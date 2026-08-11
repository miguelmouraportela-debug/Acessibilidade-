JavaScript


document.addEventListener('DOMContentLoaded', () => {
  // 1. Gerenciamento de foco do link "Pular para o conteúdo principal"
  const skipLink = document.querySelector('.skip-link');
  const mainContent = document.getElementById('conteudo-principal');

  if (skipLink && mainContent) {
    skipLink.addEventListener('click', () => {
      // Garante que o elemento principal receba foco para leitores de tela e teclado
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
    });
  }

  // 2. Alternância de Modo de Alto Contraste / Modo Escuro
  const contrastBtn = document.getElementById('btn-contraste');
  
  // Carrega a preferência salva no armazenamento local
  const isDarkSaved = localStorage.getItem('alto-contraste') === 'true';
  if (isDarkSaved) {
    document.body.classList.add('dark-mode');
  }

  if (contrastBtn) {
    contrastBtn.setAttribute('aria-pressed', isDarkSaved);
    
    contrastBtn.addEventListener('click', () => {
      const isDarkActive = document.body.classList.toggle('dark-mode');
      contrastBtn.setAttribute('aria-pressed', isDarkActive);
      localStorage.setItem('alto-contraste', isDarkActive);

      // Notifica leitores de tela sobre a alteração
      anunciarStatus(isDarkActive ? 'Modo de alto contraste ativado.' : 'Modo de alto contraste desativado.');
    });
  }

  // 3. Sistema de anúncios em tempo real para Leitores de Tela (ARIA Live Region)
  function anunciarStatus(mensagem) {
    let statusRegion = document.getElementById('aria-status-region');
    
    if (!statusRegion) {
      statusRegion = document.createElement('div');
      statusRegion.id = 'aria-status-region';
      statusRegion.setAttribute('aria-live', 'polite');
      statusRegion.setAttribute('aria-atomic', 'true');
      // Classe invisível para manter fora do layout visual
      statusRegion.classList.add('sr-only'); 
      document.body.appendChild(statusRegion);
    }

    statusRegion.textContent = '';
    setTimeout(() => {
      statusRegion.textContent = mensagem;
    }, 100);
  }
});