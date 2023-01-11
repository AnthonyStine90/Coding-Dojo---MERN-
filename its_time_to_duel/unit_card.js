import Card from './card.js'

class Unit extends Card {
    constructor(name, cost=1, power=1, res=1) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        //attack target's resilience with your power, (target resil - you're power)
        if(target instanceof Unit){
            target.res -= this.power;
        }
    }
}

export default Unit