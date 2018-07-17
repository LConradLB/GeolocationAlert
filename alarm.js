// <audio id="xyz" src="http://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav" preload="auto"></audio>


class Alarm {

    constructor() {

        var sound = document.getElementById("myAudio"); 
        sound.loop = true;
        this.sound = sound
    }

    playAudio() { 
      sound.play(); 
    } 

    pauseAudio() { 
      sound.pause(); 
    } 

}

