// Função para mostrar ou ocultar campos com base na seleção do tipo de usuário
function showFields() {
  // Adiciona um ouvinte de evento de clique à caixa de tipo de usuário
  document
    .querySelector(".typeOfUser_box")
    .addEventListener("click", (event) => {
      // Verifica se o valor do elemento clicado não é undefined e é do tipo "user"
      if (event.target.value != undefined && event.target.value === "user") {
        // Adiciona a classe "hidden" ao campo profissionalInfo_box se o tipo de usuário for "user"
        document.querySelector(".profissionalInfo_box").classList.add("hidden");
      } else {
        // Remove a classe "hidden" do campo profissionalInfo_box se o tipo de usuário não for "user"
        document
          .querySelector(".profissionalInfo_box")
          .classList.remove("hidden");
      }
    });
}

// Chama a função para que ela seja executada quando a página carregar
showFields();
