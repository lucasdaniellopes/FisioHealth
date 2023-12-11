document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o container do carrossel e as imagens dentro dele
  const carrossel = document.querySelector(".content_carrossel_container");
  const images = document.querySelector(".content_carrossel_images");

  // Obtém a largura de uma imagem no carrossel
  let imageWidth = document.querySelector(
    ".content_carrossel_images img"
  ).clientWidth;

  // Acompanha o índice da imagem atual no carrossel
  let indexImage = 0;

  // Função para avançar para a próxima imagem no carrossel
  function goImages() {
    indexImage++;

    // Volta para a primeira imagem quando atinge a última
    if (indexImage >= images.children.length) {
      indexImage = 0;
    }

    // Atualiza a posição do carrossel para mostrar a próxima imagem
    updateCarrossel();
  }

  // Função para atualizar a posição do carrossel
  function updateCarrossel() {
    // Move o carrossel horizontalmente para mostrar a próxima imagem
    images.style.transform = `translateX(${-imageWidth * indexImage}px)`;
  }

  // Configura um intervalo para avançar automaticamente a cada 3 segundos
  setInterval(goImages, 3000);
});
