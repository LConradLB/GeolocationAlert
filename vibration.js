class Vibrate {

constructor(){
    this.duration = ([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500])
}

// Starts vibration at passed in level
startVibrate() {
    navigator.vibrate(duration);
}

}