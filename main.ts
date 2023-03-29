let Hearing = false
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Hearing = !(Hearing)
    if (Hearing) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.setLedColor(0xff0000)
    Hearing = false
})
