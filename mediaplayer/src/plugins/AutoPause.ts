import MediaPlayer from '../MediaPlayer'

class AutoPause {
    private threshold: number
    private player: MediaPlayer

    constructor(){
        this.threshold = 0.25
        this.handlerItersection = this.handlerItersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player){
        this.player = player
        const observer = new IntersectionObserver(this.handlerItersection, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    private handlerItersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0]

        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
        
    }

    private handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible"
        if (isVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }
}

export default AutoPause