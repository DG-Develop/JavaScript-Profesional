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

export default MediaPlayer