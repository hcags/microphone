input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (input.soundLevel() < 50) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (input.soundLevel() >= 50 && input.soundLevel() < 125) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (input.soundLevel() >= 125 && input.soundLevel() < 190) {
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.setLedColor(0xff0000)
basic.forever(function () {
	
})
