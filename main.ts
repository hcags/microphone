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
hearing = false
basic.setLedColor(0xff0000)
basic.forever(function () {
    if (hearing || input.buttonIsPressed(Button.AB)) {
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
    }
})
