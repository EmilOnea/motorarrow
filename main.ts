input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 2; index++) {
        basic.showArrow(ArrowNames.NorthWest)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 10)
    }
    for (let index = 0; index < 2; index++) {
        basic.showArrow(ArrowNames.NorthEast)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 8)
    }
})
