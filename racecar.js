class Racecar {
    constructor(engine){
        this.engine = engine
        this.speed = 0
        this.gear = 1
    }

    start() {
        this.engine.start()
    }

    shiftUp() {
        if(this.gear < 5) {
            this.gear++
            this.speed = this.calculateSpeed()
        }
    }

    shiftDown() {
        if(this.gear > 1) {
            this.gear--
            this.speed = this.calculateSpeed()
        }
    }

    accelerate() {
        this.engine.accelerate()
        this.speed = this.calculateSpeed()
    }

    decelerate() {
        this.engine.accelerate()
        this.speed = this.calculateSpeed()
    }

    calculateSpeed() {
        return (this.engine.rpm * this.gear) / 50
    }
}

class Engine {
    constructor() {
        this.oilLevel = 100
        this.rpm = 0
    }

    start() {
        this.rpm = 500
    }

    stop() {
        this.rpm = 0
    }

    accelerate() {
        console.log('Warming! This is a base class method and should not be called.')
    }

    decelerate() {
        console.log('Warming! This is a base class method and should not be called.')
    }
}

class TurboEngine extends Engine {
    constructor() {
        super()
        this.horsepower = 450
    }

    accelerate() {
        if(this.rpm !== 0) {
            this.rpm += 750
        }
    }

    decelerate() {
        if(this.rpm !== 0) {
            this.rpm -= 750
        }
    }
}

class StockEngine extends Engine {
    constructor() {
        super()
        this.horsepower = 250
    }

    accelerate() {
        if(this.rpm !== 0) {
            this.rpm += 250
        }
    }

    decelerate() {
        if(this.rpm !== 0) {
            this.rpm -= 250
        }
    }
}

let turbo = new TurboEngine()
let fastRaceCar = new Racecar(turbo)

let stock = new StockEngine()
let slowRaceCar = new Racecar(stock)

console.log('Test drive the fast race car:')
fastRaceCar.start()
console.log('Accelerating')
fastRaceCar.accelerate()
console.log('Speed: ', fastRaceCar.speed)

console.log('Shifting up:')
fastRaceCar.shiftUp()
console.log('Speed: ', fastRaceCar.speed)

console.group('Test drive the slow race car:')
slowRaceCar.start()
console.log('Accelerating:')
slowRaceCar.accelerate()
console.log('Speed: ', slowRaceCar.speed)

console.log('Shifting up:')
slowRaceCar.shiftUp()
console.log('Speed: ', slowRaceCar.speed)