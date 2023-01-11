import Card from "./card.js";
import Unit from "./unit_card.js";

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    // create a method that adds to or reduces the given stat of a unit card by the magnitude of an effect card
    play(target){
        // an effect has to be played with a unit to target, check if target is a unit
        if(target instanceof Unit) {
            //add magnitude to the targets res or power
            if(this.stat == 'resilience'){
                target.res += this.magnitude;
                // console.log(this.magnitude);
            }
            
            else if(this.stat == 'power'){
                target.power += this.magnitude;
                // console.log(this.magnitude);
            }
            
        } else {
            throw new ErrorEvent("Target must be a unit!");
        }
    }
}

export default Effect