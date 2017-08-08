const app = "I don't do much."


function bumpCounter(){
    let counter = 0

    function addBump(){
        counter += 1
    }

    function getBumps(){
        return counter
    }

    return {
        addBump,
        getBumps
    }
}

function createAnimal(animalType){

    function create(deadlyDevice){
        return { animalType: animalType, deadlyDevice: deadlyDevice }
    }

    return create
}

let sharkCreator = createAnimal('Shark')
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
let sharkWithFrickinCannon = sharkCreator('Cannon')