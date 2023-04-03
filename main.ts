let number = 0
input.onGesture(Gesture.Shake, function () {
    let answer = 0
    number = randint(1, 2)
    if (answer == 1) {
        basic.showString("YES")
    } else if (answer == 2) {
        basic.showString("NO")
    } else {
        basic.showString("MAYBE")
    }
})
basic.forever(function () {
    basic.showNumber(8)
})
