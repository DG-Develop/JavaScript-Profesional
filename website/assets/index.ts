import MediaPlayer from '@dgdevelop/mediaplayer'
import AutoPlay from '@dgdevelop/mediaplayer/lib/plugins/Autoplay'
import AutoPause from '@dgdevelop/mediaplayer/lib/plugins/AutoPause'
import Ads from '@dgdevelop/mediaplayer/lib/plugins/Ads'

// query selector agarra un tag o varios en este caso solo uno para video y otro para el boton
const video = document.querySelector('video')
const player = new MediaPlayer({
  el: video, 
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
})

const play: HTMLElement = document.getElementById('play')
play.onclick = () => player.togglePlay()

const unmute: HTMLElement = document.getElementById('unmute')
unmute.onclick = () => {
  (player.media.muted)
    ? player.unmute()
    : player.mute()
}


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}