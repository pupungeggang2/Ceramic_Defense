function loopAdventureStart() {
    displayAdventureStart()
}

function displayAdventureStart() {
    drawSceneInit()
    context.strokeRect(UI.adventureStart.buttonBack[0], UI.adventureStart.buttonBack[1], UI.adventureStart.buttonBack[2], UI.adventureStart.buttonBack[3])
    context.strokeRect(UI.adventureStart.buttonStart[0], UI.adventureStart.buttonStart[1], UI.adventureStart.buttonStart[2], UI.adventureStart.buttonStart[3])
    context.strokeRect(UI.adventureStart.buttonTutorial[0], UI.adventureStart.buttonTutorial[1], UI.adventureStart.buttonTutorial[2], UI.adventureStart.buttonTutorial[3])
}

function mouseUpAdventureStart(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRect({x: x, y: y}, UI.adventureStart.buttonBack)) {
                    scene = 'Title'
                    state = ''
                } else if (pointInsideRect({x: x, y: y}, UI.adventureStart.buttonStart)) {
                    scene = 'Defense'
                    state = 'Start'
                }
            }
        }
    }
}
