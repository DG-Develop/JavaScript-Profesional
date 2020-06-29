function MediaPlayer(config) {
    this.media = config.el
  }

  MediaPlayer.prototype.play = function() {
    this.media.play()
  }

  MediaPlayer.prototype.pause = function() {
    this.media.pause()
  }

  MediaPlayer.prototype.togglePlay = function() {
    //regresa un true  si está pausado y false en caso contrario
    if (this.media.paused) { 
      this.play()
    } else {
      this.pause()
    }
  }

  // query selector agarra un tag o varios en este caso solo uno para video y otro para el boton
  const video = document.querySelector('video')
  const player = new MediaPlayer({ el: video })

  const button = document.querySelector('button')
  button.onclick = () => player.togglePlay()