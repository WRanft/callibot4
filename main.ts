calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, 48)
calliBot2.setRgbLed(C2RgbLed.All, 8, 8, 0)
basic.pause(5000)
if (true) {
    calliBot2.warte(C2SensorWait.distanceCm, C2Check.lessThan, 10)
    calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
} else {
	
}
basic.forever(function () {
	
})
