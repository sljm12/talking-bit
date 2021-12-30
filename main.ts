input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 98)
})
function calculate_servo_angle (soundLevel: number) {
    if (input.soundLevel() / 256 * diff >= diff) {
        return min
    } else {
        return max - input.soundLevel() / 256 * diff
    }
}
input.onButtonPressed(Button.B, function () {
    if (on_off_state == 1) {
        on_off_state = 0
    } else {
        on_off_state = 1
    }
})
let diff = 0
let min = 0
let max = 0
let on_off_state = 0
on_off_state = 1
max = 98
min = 78
diff = max - max
basic.forever(function () {
    serial.writeNumber(input.soundLevel() / 256 * 90)
    serial.writeLine("")
    if (on_off_state == 1 && input.soundLevel() > 30) {
        pins.servoWritePin(AnalogPin.P0, calculate_servo_angle(input.soundLevel()))
    } else {
        pins.servoWritePin(AnalogPin.P0, max)
    }
    basic.pause(50)
})
