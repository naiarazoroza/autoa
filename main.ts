radio.onReceivedNumber(function (receivedNumber) {
	
})
function ezkerreko_intermitentea () {
    if (input.buttonIsPressed(Button.B)) {
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
}
function limpiaparabrisas () {
    if (input.logoIsPressed()) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P0, 180)
        }
    }
}
function eskuineko_intermitentea () {
    if (input.buttonIsPressed(Button.A)) {
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
