// js/script.js

// Rolagem suave no menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Validação do formulário
document.querySelector("form").addEventListener("submit", e => {
  const nome = e.target.querySelector("input[type=text]").value;
  if(nome.trim() === "") {
    alert("Por favor, preencha seu nome.");
    e.preventDefault();
  }
});
