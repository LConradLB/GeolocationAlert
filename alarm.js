{/* <audio id="xyz" src="http://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav" preload="auto"></audio> */}


class Alarm {

constructor(){
    // alertUser = false
    var audio = new Audio('https://freesound.org/people/bone666138/sounds/198841/');

}

// input if the location is less than a mile away in distance 
play(){

    audio.play()
    alert("You are nearing your destination!");
    // alertUser = true 
}

}
