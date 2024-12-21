class Field {
    unit = []

    constructor() {
    }
}

class Level {
    wave = []

    constructor() {
    }
}

class Player {
    baseLevel = 1
    baseLevelMax = 5
    energy = 4
    energyMax = 6
    energyGen = 1

    deck = []
    hand = []
    equipment = []

    constructor() {
    }
}

class Unit {
    speed = 200
    position = 0

    constructor() {
        this.position = new Vector(0, 0)
    }
}

class Card {
    
}

class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}
