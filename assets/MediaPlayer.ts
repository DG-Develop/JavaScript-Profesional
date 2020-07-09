class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>

  constructor(config, plugins = []) {
    this.media = config.el
    this.plugins = config.plugins

    this.initPlugins()
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }
  mute() {
    this.media.muted = true
  }
  unmute() {
    this.media.muted = false
  }
  play() {
    this.media.play()
  }
  pause() {
    this.media.pause()
  }
  togglePlay() {
    //regresa un true  si está pausado y false en caso contrario
    if (this.media.paused) {
      this.play()
    }
    else {
      this.pause()
    }
  }
}







export default MediaPlayer