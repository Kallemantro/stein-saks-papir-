let bildenummer = 0
input.onGesture(Gesture.Shake, function () {
    bildenummer = Math.randomRange(0, 2)
    basic.showNumber(bildenummer)
    if (bildenummer == 0) {
        basic.showLeds(`
          . . # . .
          . # # # .
          # # # # #
          . # # # .
          . . # . .
          `)
    }
    if (bildenummer == 1) {
        basic.showIcon(IconNames.Scissors)
    }
    if (bildenummer == 2) {
        basic.showLeds(`
          # # # # #
          # # # # #
          # # # # #
          # # # # #
          # # # # #
          `)
    }
})