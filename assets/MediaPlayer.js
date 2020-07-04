function MediaPlayer(config, plugins = []) {
    this.media = config.el
    this.plugins = config.plugins

    this._initPlugins()
  }

  MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }

  MediaPlayer.prototype.mute = function(){
    this.media.muted = true
  }

  MediaPlayer.prototype.unmute = function(){
    this.media.muted = false
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