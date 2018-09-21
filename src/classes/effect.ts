import { Hero } from "./hero";
import { Enemy } from "./enemy";

export class Effect 
{
    type: number;
    value: number | Array<number>;
    constructor(type: number, value: number | Array<number>) 
    {
        this.type = type;
        this.value = value;
    }

    useEffects(target: Hero | Enemy | null) {
        switch (this.type) {
            case 1:
                let hp: number;
                if (typeof this.value == 'number') {
                    hp = this.value;
                } else {
                    hp = Math.floor(Math.random() * (this.value[1] - this.value[0])) + this.value[0];
                }
                if (target != null) {
                    let changed_hp = target.changeHP(hp);
                    return {type: 'hp', data: changed_hp};
                }

                return false;
                
            default:
                return false;
        }
    }
}
