let heart = images.createImage(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .
`)
let smilie = images.createImage(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .
`)
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    smilie.showImage(0)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    heart.showImage(0)
})
