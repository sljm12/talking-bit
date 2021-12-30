input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 98)
})
function calculate_servo_angle (soundLevel: number) {
    return max - Math.map(soundLevel, 0, 256, 0, 40)
}
input.onButtonPressed(Button.B, function () {
    if (on_off_state == 1) {
        on_off_state = 0
    } else {
        on_off_state = 1
    }
})
let max = 0
let on_off_state = 0
on_off_state = 1
max = 98
let min = 78
let diff = max - min
basic.forever(function () {
    serial.writeValue("sound", input.soundLevel() / 256 * 90)
    if (on_off_state == 1 && input.soundLevel() > 30) {
        serial.writeValue("value", calculate_servo_angle(input.soundLevel()))
        pins.servoWritePin(AnalogPin.P0, calculate_servo_angle(input.soundLevel()))
    } else {
        pins.servoWritePin(AnalogPin.P0, max)
    }
    basic.pause(30)
})
