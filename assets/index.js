import MediaPlayer from './MediaPlayer.js'

  // query selector agarra un tag o varios en este caso solo uno para video y otro para el boton
  const video = document.querySelector('video')
  const player = new MediaPlayer({ el: video })

  const button = document.querySelector('button')
  button.onclick = () => player.togglePlay()