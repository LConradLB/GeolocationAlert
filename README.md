# Napmapp
### About
Napmapp was created as part of an SDLC assignment at ADA University.  
It's a web-based app that allows the setting of location based markers.  

### Why?
How many times have you fallen asleep or have been tempted to fall asleep on public transport, only to worry about waking up in time for your stop? This app aims to give you peace of mind whilst travelling and sleeping during your travels.

### How?
The app is serving a static web page which uses the Google Maps API for location tracks and distance calculations to your destination. The app is responsive, so it can work across multiple platforms with ease.

### Where?
[You can check it out, here](https://lconradlb.github.io/GeolocationAlert/)

### Problems
So as you can guess, we ran into some problems when designing and drafting the application, they are as follows:  
1. What if there's no connection? - Well, it uses GPS. So, tough luck.  
2. What if you go underground? - If you're using the tube, there are two options that could be explored. The first, using the accelerometer to estimate velocity and as such esimating position. The second, using the microphone to listen out for station names and track your progress through the underground using that.

