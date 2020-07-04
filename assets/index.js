import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/Autoplay.js'

  // query selector agarra un tag o varios en este caso solo uno para video y otro para el boton
const video = document.querySelector('video')
const player = new MediaPlayer({ el: video, plugins: [
  /*new AutoPlay()*/
] })

const unmute = document.getElementById('unmute')
unmute.onclick = () =>{
  (player.media.muted)
    ? player.unmute()
    : player.mute()
} 

const play = document.getElementById('play')
play.onclick = () => player.togglePlay()