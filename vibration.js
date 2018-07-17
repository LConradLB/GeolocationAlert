class Vibrate {

    static startVibrate() {
    // Vibrate for length of time specified
    navigator.vibrate(5000);
    }

    static startVibratePattern() {
    // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
    // indices specify pauses.
    // Vibrate for 500ms 6 times, pausing for 250ms in between each one.
    navigator.vibrate(500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500);
    }

    static stopVibrate() {
    // You can also stop an ongoing vibration pattern by specifying a vibration
     // length of zero.
    navigator.vibrate(0);
    }

    }