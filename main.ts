input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("E A B C5 E - E F ", 130)
    music.playMelody("F F E D - E - - ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
basic.clearScreen()
