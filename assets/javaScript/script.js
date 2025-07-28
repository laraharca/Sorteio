document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita o envio real do formulário

  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  alert(`Obrigado por se inscrever, ${nome} ${sobrenome}!\nEnviaremos novidades para: ${email}`);
});
