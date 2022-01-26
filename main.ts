radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        limpiaparabrisas()
    }
    if (receivedNumber == 1) {
        eskuineko_intermitentea()
    }
    if (receivedNumber == 2) {
        ezkerreko_intermitentea()
    }
})
function ezkerreko_intermitentea () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            # # . . .
            . . . . .
            `)
    }
}
function limpiaparabrisas () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 180)
    }
}
function eskuineko_intermitentea () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . # #
            . . . . .
            `)
    }
}
radio.setGroup(4)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.logoIsPressed()) {
        radio.sendNumber(3)
    }
})
