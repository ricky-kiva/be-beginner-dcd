const Wolf = require("./Wolf")
const Tiger = require("./Tiger")

const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        tiger.growl()
        return
    } else if (tiger.strength == wolf.strength){
        console.log('\nTiger & Wolf have the same strenth')
    } else {
        wolf.howl()
    }
}

const tigerBengal = new Tiger()
const wolfGray = new Wolf()

fighting(tigerBengal, wolfGray)