// ============================
// Digitação automática no título da Home
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero h2");
  if (title) {
    const text = "Bem-vindo ao meu portfólio 🚀";
    let index = 0;

    const typeEffect = () => {
      if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
      }
    };

    title.textContent = ""; // limpar antes
    typeEffect();
  }
});

// ============================
// Animações ao rolar a página
// ============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
});

// ============================
// Dark Mode com botão fixo
// ============================
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "🌙 Modo Escuro";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px 15px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";
  btn.style.background = "#004aad";
  btn.style.color = "white";
  btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";

  btn.addEventListener("click", toggleDarkMode);
  document.body.appendChild(btn);
});

// ============================
// Formulário de contato
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Obrigado pela mensagem! 🚀 Entrarei em contato em breve.");
      form.reset();
    });
  }
});