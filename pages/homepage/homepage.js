document.addEventListener("DOMContentLoaded", function () {
  const carrossel = document.querySelector(".content_carrossel_container");
  const images = document.querySelector(".content_carrossel_images");

  let imageWidth = document.querySelector(
    ".content_carrossel_images img"
  ).clientWidth; /* Obtém a largura de uma imagem  */
  let indexImage = 0; /* Acompanha o índice da imagem atual no carrossel */

  function goImages() {
    indexImage++;

    if (indexImage >= images.children.length) {
      indexImage = 0; /* Volta para a primeira imagem quando atinge a última */
    }

    updateCarrossel(); /* Atualiza a posição do carrossel */
  }

  function updateCarrossel() {
    images.style.transform = `translateX(${
      -imageWidth * indexImage
    }px)`; /* Move o carrossel horizontalmente para mostrar a próxima imagem */
  }

  setInterval(goImages, 3000); /* Avança automaticamente a cada 3 segundos */
});
