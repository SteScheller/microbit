heart = images.create_image("""
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .
""")

smilie = images.create_image("""
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .
""")

def on_button_pressed_a():
    heart.show_image(0)

def on_button_pressed_b():
    smilie.show_image(0)

input.on_button_pressed(Button.B, on_button_pressed_b)
input.on_button_pressed(Button.A, on_button_pressed_a)
