JavaScript


document.addEventListener("DOMContentLoaded", () => {
  // Define o contorno do foco visível apenas para navegação via teclado
  let isUsingKeyboard = false;

  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      isUsingKeyboard = true;
      document.body.classList.add("keyboard-user");
    }
  });

  window.addEventListener("mousedown", () => {
    isUsingKeyboard = false;
    document.body.classList.remove("keyboard-user");
  });

  // Atualiza dinamicamente o link ativo da navegação ao clicar
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});