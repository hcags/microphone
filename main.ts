input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    hearing = !(hearing)
    if (hearing) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
})
let hearing = false
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.setLedColor(0xff0000)
hearing = false
basic.forever(function () {
	
})
