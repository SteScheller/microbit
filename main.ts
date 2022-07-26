input.onButtonPressed(Button.A, function () {
    heart.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    smilie.showImage(0)
})
let smilie: Image = null
let heart: Image = null
heart = images.createImage(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
smilie = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
