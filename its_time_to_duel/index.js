import Unit from './unit_card.js'
import Effect from "./effect_card.js";

const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
// name, cost, power, resilience
// console.log(redBeltNinja.power);

const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
// console.log(blackBeltNinja.power);

const hardAlgorithm = new Effect('Hard Algorithm', 2, "increase target's resilience by 3", 'resilience', +3);
// name, cost, text, stat, magnitude
// console.log(hardAlgorithm.text);

const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, "reduce target's resilience by 2", 'resilience', -2);
// console.log(unhandledPromiseRejection.magnitude);

const pairProgramming = new Effect('Pair Programming', 3, "increase target's power by 2", 'power', +2)
console.log(`this is pairProgramming magnitude: ${pairProgramming.magnitude}`);

//play hardAlgorithm on redBeltNinja

// turn 1
hardAlgorithm.play(redBeltNinja);
console.log(`redBeltNinja resilience: ${redBeltNinja.res}`);

// turn 2
unhandledPromiseRejection.play(redBeltNinja);
console.log(`redBeltNinja resilience: ${redBeltNinja.res}`)

//turn 3
pairProgramming.play(redBeltNinja);
console.log(`this is RBN power: ${redBeltNinja.power}`)
// redBeltNinja incorrectly adds 3 to power instead of 2

redBeltNinja.attack(blackBeltNinja);
console.log(`this is blackBelt Ninja resilience: ${blackBeltNinja.res}`)
