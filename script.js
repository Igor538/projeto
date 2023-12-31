  function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pega a tag img
    const img = document.querySelector("#profile img")
    //substituir a imagem
    if (html.classList.contains("light")) {
      //se tiver o light mode, adicionar a imagem light
      img.setAttribute('src', './assets/assets/avatar-light.png')
      img.setAttribute('alt', 'Foto de Mayk Brito, de oculos escuros, sorrindo de jaqueta.')
    } else {
      //se tiver sem light mode
      img.setAttribute('src', './assets/assets/avatar.png')
    }
  
  }   